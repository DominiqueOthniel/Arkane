"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
};

export default function LiquidMetal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.35 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const blobs: Blob[] = Array.from({ length: 5 }, (_, i) => ({
      x: 0.35 + i * 0.08,
      y: 0.28 + (i % 3) * 0.08,
      r: 0.14 + (i % 3) * 0.04,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.0003,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / w;
      mouse.current.y = e.clientY / h;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      const g = ctx.createRadialGradient(
        w * 0.5,
        h * 0.32,
        0,
        w * 0.5,
        h * 0.45,
        Math.max(w, h) * 0.72,
      );
      g.addColorStop(0, "#121218");
      g.addColorStop(0.45, "#050506");
      g.addColorStop(1, "#000000");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const time = t * 0.001;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const b of blobs) {
        if (!reduced.current) {
          b.x += b.vx + (mx - 0.5) * 0.00008;
          b.y += b.vy + (my - 0.35) * 0.00006;
          if (b.x < 0.15 || b.x > 0.85) b.vx *= -1;
          if (b.y < 0.12 || b.y > 0.7) b.vy *= -1;
        }

        const pulse = 1 + Math.sin(time * 1.2 + b.phase) * 0.08;
        const cx = b.x * w + (mx - 0.5) * 28;
        const cy = b.y * h + (my - 0.5) * 18;
        const radius = b.r * Math.min(w, h) * pulse;

        const metal = ctx.createRadialGradient(
          cx - radius * 0.28,
          cy - radius * 0.32,
          radius * 0.05,
          cx,
          cy,
          radius,
        );
        metal.addColorStop(0, "rgba(255,255,255,0.55)");
        metal.addColorStop(0.18, "rgba(210,210,220,0.28)");
        metal.addColorStop(0.42, "rgba(120,120,132,0.16)");
        metal.addColorStop(0.72, "rgba(40,40,48,0.1)");
        metal.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          radius * (1.15 + Math.sin(time + b.phase) * 0.08),
          radius * (0.88 + Math.cos(time * 0.9 + b.phase) * 0.1),
          Math.sin(time * 0.4 + b.phase) * 0.5,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = metal;
        ctx.fill();
      }

      const gloss = ctx.createRadialGradient(
        mx * w,
        my * h,
        0,
        mx * w,
        my * h,
        Math.min(w, h) * 0.35,
      );
      gloss.addColorStop(0, "rgba(255,255,255,0.09)");
      gloss.addColorStop(0.35, "rgba(180,180,190,0.03)");
      gloss.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gloss;
      ctx.fillRect(0, 0, w, h);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
