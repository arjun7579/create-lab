import { useRef, useEffect } from "react";

export default function LighthouseCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const draw = (x: number, y: number) => {
      ctx.clearRect(0, 0, w, h);

      // Background glow
      const grd = ctx.createRadialGradient(x, y, 10, x, y, 400);
      grd.addColorStop(0, "rgba(56, 189, 248, 0.25)");
      grd.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      // Beam
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(w, 0);
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = "rgba(56, 189, 248, 0.06)";
      ctx.fill();

      // Core point
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56, 189, 248, 0.9)";
      ctx.fill();
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draw(x, y);
    };

    window.addEventListener("pointermove", onMove);

    // Initial draw
    draw(w / 2, h / 2);

    const onResize = () => {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
      draw(w / 2, h / 2);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
