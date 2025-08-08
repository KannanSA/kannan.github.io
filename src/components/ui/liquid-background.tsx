"use client";

import { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) {
      rootRef.current?.classList.add("motion-safe:paused");
    }
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="liquid-bg fixed inset-0 -z-10 overflow-hidden">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
      <div className="liquid-noise" />
    </div>
  );
}
