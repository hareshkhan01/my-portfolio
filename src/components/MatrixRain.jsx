import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const fontSize = 14;
    const trailLength = 12;

    let columns = 0;
    let drops = [];
    let speeds = [];
    let lengths = [];
    let animationId;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(window.innerWidth / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.random() * (window.innerHeight / fontSize)
      );

      speeds = Array.from(
        { length: columns },
        () => Math.random() * 0.7 + 0.25
      );

      lengths = Array.from(
        { length: columns },
        () => Math.floor(Math.random() * trailLength) + 5
      );

      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    };

    resize();

    const draw = () => {
      // Fade previous frames to create trails
      ctx.fillStyle = "rgba(3, 6, 3, 0.10)";
      ctx.fillRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < columns; i++) {
        const headY = drops[i];

        // Draw the trail behind the leading character
        for (let j = 0; j < lengths[i]; j++) {
          const y = (headY - j) * fontSize;

          if (y < 0 || y > window.innerHeight) continue;

          const char =
            chars[Math.floor(Math.random() * chars.length)];

          const x = i * fontSize + fontSize / 2;

          // Leading character is brightest
          if (j === 0) {
            ctx.globalAlpha = 0.9;

            ctx.shadowBlur = 8;
            ctx.shadowColor = "#39ff14";

            ctx.fillStyle = "#d7ffd0";
          } else {
            // Trail gradually fades
            ctx.globalAlpha =
              Math.max(0, 0.35 - j * 0.025);

            ctx.shadowBlur = 0;
            ctx.fillStyle = "#39ff14";
          }

          ctx.fillText(char, x, y);
        }

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Move the stream
        drops[i] += speeds[i];

        // Restart stream after it leaves the screen
        if (
          drops[i] * fontSize >
          window.innerHeight + lengths[i] * fontSize &&
          Math.random() > 0.975
        ) {
          drops[i] =
            -Math.random() *
            (window.innerHeight / fontSize);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        opacity: 0.16,
      }}
      aria-hidden="true"
    />
  );
};

export default MatrixRain;