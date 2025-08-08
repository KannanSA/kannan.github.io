"use client";

import React, { useEffect, useRef, useState } from "react";

// Apple-like custom cursor with smooth trailing particles, interactive hover scale, magnetic links, and soft glow
export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia?.("(pointer: fine)").matches ?? false;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const allow = isFinePointer && !reduceMotion;
    setEnabled(allow);

    if (allow) {
      document.body.classList.add("custom-cursor-active");
      return () => {
        document.body.classList.remove("custom-cursor-active");
      };
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Positions
    let mouseX = w / 2;
    let mouseY = h / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let ringRadius = 10;
    let ringTargetRadius = 10;
    let ringStroke = 2;
    let ringColor = getComputedStyle(document.documentElement).getPropertyValue("--color-apple-blue")?.trim() || "#0071e3";

    // Trail points
    const N = 16;
    const trail = Array.from({ length: N }, () => ({ x: mouseX, y: mouseY }));

    // Interaction detection
    const interactiveSelector = [
      "a",
      "button",
      "[role=button]",
      ".apple-button-primary",
      ".apple-button-secondary",
      ".apple-card",
      "[data-cursor]",
    ].join(",");

    let isDown = false;
    let hoveringInteractive = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onDown = () => {
      isDown = true;
      ringTargetRadius = 6;
    };

    const onUp = () => {
      isDown = false;
      ringTargetRadius = hoveringInteractive ? 18 : 10;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(interactiveSelector)) {
        hoveringInteractive = true;
        ringTargetRadius = isDown ? 6 : 18;
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(interactiveSelector)) {
        hoveringInteractive = false;
        ringTargetRadius = isDown ? 6 : 10;
      }
    };

    // Lightweight magnetic effect for links/buttons
    const magneticSelector = [
      "a",
      "button",
      ".apple-button-primary",
      ".apple-button-secondary",
      "[data-magnet]",
    ].join(",");

    const activateMagnet = (el: HTMLElement) => {
      let rafId = 0;
      const strength = 0.15; // lower = tighter stick
      const max = 10; // px
      const original = window.getComputedStyle(el).transform;

      const onElemMove = (ev: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(-max, Math.min(max, (ev.clientX - cx) * strength));
        const dy = Math.max(-max, Math.min(max, (ev.clientY - cy) * strength));
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          el.style.transform = `translate(${dx}px, ${dy}px)`;
        });
      };

      const onElemLeave = () => {
        cancelAnimationFrame(rafId);
        el.style.transform = original === "none" ? "" : original;
      };

      el.addEventListener("mousemove", onElemMove);
      el.addEventListener("mouseleave", onElemLeave, { once: true });
    };

    const onDocOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest(magneticSelector) as HTMLElement | null;
      if (el) activateMagnet(el);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseover", onDocOver);

    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // update trail
      trail[0].x = lerp(trail[0].x, mouseX, 0.35);
      trail[0].y = lerp(trail[0].y, mouseY, 0.35);
      for (let i = 1; i < N; i++) {
        trail[i].x = lerp(trail[i].x, trail[i - 1].x, 0.35);
        trail[i].y = lerp(trail[i].y, trail[i - 1].y, 0.35);
      }

      // render trailing dots
      for (let i = N - 1; i >= 0; i--) {
        const p = trail[i];
        const radius = Math.max(1.25, 7 - i * 0.35);
        const alpha = Math.max(0.05, 0.18 - i * 0.01);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,113,227,${alpha})`;
        ctx.fill();
      }

      // update ring
      ringX = lerp(ringX, mouseX, 0.2);
      ringY = lerp(ringY, mouseY, 0.2);
      ringRadius = lerp(ringRadius, ringTargetRadius, 0.2);

      // soft glow around cursor
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const glowGrad = ctx.createRadialGradient(ringX, ringY, 0, ringX, ringY, 120);
      glowGrad.addColorStop(0, "rgba(0,113,227,0.12)");
      glowGrad.addColorStop(1, "rgba(0,113,227,0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(ringX, ringY, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // ring
      ctx.beginPath();
      ctx.arc(ringX, ringY, ringRadius, 0, Math.PI * 2);
      ctx.strokeStyle = ringColor;
      ctx.lineWidth = ringStroke;
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseover", onDocOver);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden
    />
  );
}
