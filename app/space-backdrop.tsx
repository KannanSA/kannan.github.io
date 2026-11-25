'use client';

import { useEffect, useRef } from 'react';

type Star = { x: number; y: number; z: number; tw: number; ph: number };

export function SpaceBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let raf = 0;
    let running = true;

    const seedStars = () => {
      const count = Math.min(200, Math.max(70, Math.round((width * height) / 16000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        tw: 0.35 + Math.random() * 1.3,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const blob = (x: number, y: number, radius: number, inner: string, mid: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, inner);
      gradient.addColorStop(0.42, mid);
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (now: number) => {
      const time = now / 1000;
      const drift = motion.matches ? 0 : time;
      const w = width;
      const h = height;
      const reach = Math.max(w, h);
      ctx.clearRect(0, 0, w, h);

      blob(
        w * (0.06 + Math.sin(drift * 0.05) * 0.025),
        h * (0.08 + Math.cos(drift * 0.04) * 0.02),
        reach * 0.4,
        'rgba(92, 48, 210, 0.4)',
        'rgba(42, 18, 110, 0.14)',
      );
      blob(
        w * (0.94 + Math.cos(drift * 0.045) * 0.02),
        h * (0.26 + Math.sin(drift * 0.03) * 0.025),
        reach * 0.36,
        'rgba(28, 126, 255, 0.32)',
        'rgba(8, 54, 130, 0.12)',
      );
      blob(
        w * (0.14 + Math.sin(drift * 0.03) * 0.03),
        h * (0.88 + Math.cos(drift * 0.035) * 0.015),
        reach * 0.38,
        'rgba(210, 36, 150, 0.26)',
        'rgba(90, 12, 64, 0.1)',
      );
      blob(
        w * (0.82 + Math.cos(drift * 0.04) * 0.025),
        h * (0.92 + Math.sin(drift * 0.028) * 0.015),
        reach * 0.44,
        'rgba(255, 108, 22, 0.28)',
        'rgba(120, 40, 6, 0.1)',
      );

      ctx.save();
      ctx.translate(w * 0.52, h * 0.62);
      ctx.rotate(-0.42);
      ctx.scale(1, 0.2);
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(w, h) * 0.86, Math.PI * 1.08, Math.PI * 1.92);
      ctx.strokeStyle = 'rgba(190, 216, 255, 0.2)';
      ctx.lineWidth = 7;
      ctx.stroke();
      ctx.restore();

      const plumeX = w * (0.7 + Math.sin(drift * 0.06) * 0.03);
      const plumeY = h * (0.2 + Math.cos(drift * 0.045) * 0.02);
      const plume = ctx.createLinearGradient(plumeX - w * 0.32, plumeY + h * 0.04, plumeX, plumeY);
      plume.addColorStop(0, 'rgba(255, 120, 30, 0)');
      plume.addColorStop(0.62, 'rgba(255, 168, 72, 0.18)');
      plume.addColorStop(0.86, 'rgba(150, 206, 255, 0.2)');
      plume.addColorStop(1, 'rgba(150, 206, 255, 0)');
      ctx.beginPath();
      ctx.moveTo(plumeX - w * 0.3, plumeY + h * 0.045);
      ctx.quadraticCurveTo(plumeX - w * 0.1, plumeY - h * 0.015, plumeX, plumeY);
      ctx.strokeStyle = plume;
      ctx.lineWidth = 2;
      ctx.stroke();

      for (const star of stars) {
        const speed = 0.003 + star.z * 0.01;
        const x = ((star.x + (motion.matches ? 0 : drift * speed)) % 1) * w;
        const y = star.y * h;
        const twinkle = motion.matches
          ? 0.75
          : 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(time * star.tw + star.ph));
        const alpha = (0.22 + star.z * 0.6) * twinkle;
        const size = star.z > 0.94 ? 1.8 : star.z > 0.72 ? 1.15 : 0.7;
        ctx.fillStyle = `rgba(236, 242, 255, ${alpha.toFixed(3)})`;
        ctx.fillRect(x, y, size, size);
      }
    };

    const frame = (now: number) => {
      if (!running || document.hidden || motion.matches) return;
      draw(now);
      raf = window.requestAnimationFrame(frame);
    };

    const start = () => {
      window.cancelAnimationFrame(raf);
      if (!running || document.hidden || motion.matches) return;
      raf = window.requestAnimationFrame(frame);
    };

    const onResize = () => {
      resize();
      draw(performance.now());
    };
    const onMotion = () => {
      window.cancelAnimationFrame(raf);
      draw(0);
      start();
    };
    const onVis = () => {
      window.cancelAnimationFrame(raf);
      if (!document.hidden) start();
    };

    resize();
    draw(0);
    start();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVis);
    motion.addEventListener('change', onMotion);
    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
      motion.removeEventListener('change', onMotion);
    };
  }, []);

  return <canvas ref={ref} className="space-backdrop" aria-hidden="true" />;
}
