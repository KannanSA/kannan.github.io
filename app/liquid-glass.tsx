'use client';

import { useEffect, useState } from 'react';

type GlassFilter = {
  id: string;
  href: string;
  red: number;
  green: number;
  blue: number;
};

const cache = new Map<string, { href: string; red: number; green: number; blue: number }>();

function parseRadius(value: string, rect: DOMRect) {
  const raw = Number.parseFloat(value);
  if (!Number.isFinite(raw)) return Math.min(rect.width, rect.height) / 2;
  const px = value.trim().endsWith('%') ? (raw / 100) * Math.min(rect.width, rect.height) : raw;
  return Math.max(0, Math.min(px, Math.min(rect.width, rect.height) / 2));
}

function roundedSdf(x: number, y: number, width: number, height: number, radius: number) {
  const cx = (width - 1) / 2;
  const cy = (height - 1) / 2;
  const hx = width / 2 - radius;
  const hy = height / 2 - radius;
  const dx = Math.abs(x - cx) - hx;
  const dy = Math.abs(y - cy) - hy;
  const ax = Math.max(dx, 0);
  const ay = Math.max(dy, 0);
  return Math.min(Math.max(dx, dy), 0) + Math.hypot(ax, ay) - radius;
}

function buildMap(cssWidth: number, cssHeight: number, radius: number) {
  const key = `${Math.round(cssWidth)}x${Math.round(cssHeight)}x${Math.round(radius)}`;
  const cached = cache.get(key);
  if (cached) return cached;

  const longSide = Math.max(cssWidth, cssHeight, 1);
  const fit = Math.min(1, 240 / longSide);
  const width = Math.max(16, Math.round(cssWidth * fit));
  const height = Math.max(16, Math.round(cssHeight * fit));
  const rad = Math.min(Math.max(radius * fit, 0), Math.min(width, height) / 2 - 0.5);
  const band = Math.max(3.5, Math.min(rad * 0.7 || 8, Math.min(width, height) * 0.2));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) return { href: '/glass-map.png', red: -14, green: -16, blue: -18 };
  const image = context.createImageData(width, height);
  const data = image.data;
  const eps = 0.65;
  const sdf = (x: number, y: number) => roundedSdf(x, y, width, height, rad);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dist = sdf(x, y);
      const inside = Math.max(0, -dist);
      let rim = inside >= band ? 0 : 1 - inside / band;
      rim = rim * rim * (3 - 2 * rim);
      const nx = sdf(x + eps, y) - sdf(x - eps, y);
      const ny = sdf(x, y + eps) - sdf(x, y - eps);
      const mag = Math.hypot(nx, ny) || 1;
      const amp = rim * 124;
      const index = (y * width + x) * 4;
      data[index] = Math.max(0, Math.min(255, Math.round(128 + (nx / mag) * amp)));
      data[index + 1] = Math.max(0, Math.min(255, Math.round(128 + (ny / mag) * amp)));
      data[index + 2] = 128;
      data[index + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  const cssBand = band / fit;
  const disp = Math.min(22, Math.max(7, cssBand * 0.72));
  const spec = { href: canvas.toDataURL('image/png'), red: -disp, green: -disp * 1.16, blue: -disp * 1.34 };
  cache.set(key, spec);
  return spec;
}

export function LiquidGlass() {
  const [filters, setFilters] = useState<GlassFilter[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-transparency: reduce)');
    const fine = window.matchMedia?.('(hover: hover) and (pointer: fine)');
    if (reduce?.matches) return;

    const seen = new WeakSet<Element>();
    const observers: ResizeObserver[] = [];
    let seq = 0;

    const bind = (element: HTMLElement) => {
      if (seen.has(element)) return;
      seen.add(element);
      const id = `glass-el-${seq++}`;
      const refresh = () => {
        try {
          const rect = element.getBoundingClientRect();
          if (rect.width < 2 || rect.height < 2) return;
          const radius = parseRadius(getComputedStyle(element).borderTopLeftRadius, rect);
          const key = `${Math.round(rect.width / 4)}:${Math.round(rect.height / 4)}:${Math.round(radius)}`;
          if (element.dataset.glassKey === key) return;
          element.dataset.glassKey = key;
          const map = buildMap(rect.width, rect.height, radius);
          element.style.setProperty('--filter-id', `url(#${id})`);
          setFilters((current) => {
            const next = current.filter((item) => item.id !== id);
            next.push({ id, href: map.href, red: map.red, green: map.green, blue: map.blue });
            return next;
          });
        } catch {
          element.dataset.glassKey = 'static';
        }
      };
      if (typeof ResizeObserver === 'function') {
        const observer = new ResizeObserver(() => refresh());
        observer.observe(element);
        observers.push(observer);
      }
      refresh();

      if (!fine?.matches) return;
      const move = (event: PointerEvent) => {
        const box = element.getBoundingClientRect();
        element.style.setProperty('--lx', `${event.clientX - box.left}px`);
        element.style.setProperty('--ly', `${event.clientY - box.top}px`);
      };
      const leave = () => {
        element.style.removeProperty('--lx');
        element.style.removeProperty('--ly');
      };
      element.addEventListener('pointermove', move);
      element.addEventListener('pointerleave', leave);
    };

    const scan = () => {
      document.querySelectorAll<HTMLElement>('.liquidglass').forEach(bind);
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => {
      mutations.disconnect();
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <svg className="glass-surface__filter" aria-hidden="true" focusable="false">
      {filters.map((filter) => (
        <filter key={filter.id} id={filter.id} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feImage href={filter.href} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />
          <feDisplacementMap in="SourceGraphic" in2="map" result="dispRed" scale={filter.red} xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />
          <feDisplacementMap in="SourceGraphic" in2="map" result="dispGreen" scale={filter.green} xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />
          <feDisplacementMap in="SourceGraphic" in2="map" result="dispBlue" scale={filter.blue} xChannelSelector="R" yChannelSelector="G" />
          <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />
          <feBlend in="red" in2="green" mode="screen" result="rg" />
          <feBlend in="rg" in2="blue" mode="screen" result="output" />
          <feGaussianBlur in="output" stdDeviation="0.65" />
        </filter>
      ))}
    </svg>
  );
}
