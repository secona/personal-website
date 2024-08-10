"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d")!;

    let w = canvas.width;
    let h = canvas.height;
    const fontsize = 10;

    const columns = Math.floor(w / fontsize) + 1;
    const ypos = Array(columns).fill(0);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    function matrix() {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#39FF14";
      ctx.font = `${fontsize}px "JetBrains Mono"`;

      ypos.forEach((y, i) => {
        const text = String.fromCharCode(Math.floor(Math.random() * 93) + 33);
        const x = i * fontsize;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 100000) {
          ypos[i] = 0;
        } else {
          ypos[i] = y + fontsize;
        }
      });
    }

    function onresize() {
      h = canvas.height = document.body.clientHeight;
      w = canvas.width = window.innerWidth;
    }

    const id = setInterval(matrix, 25);
    addEventListener("resize", onresize);

    return () => {
      clearInterval(id);
      removeEventListener("resize", onresize);
    };
  }, [ref.current]);

  return (
    <canvas
      ref={ref}
      className="absolute -z-10"
      height={document.body.clientHeight}
      width={window.innerWidth}
    />
  );
}
