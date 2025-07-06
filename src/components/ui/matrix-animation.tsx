"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const MatrixAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.parentElement.clientWidth;
    let height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
    
    let columns = Math.floor(width / 20);
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const handleResize = () => {
        if (!canvas || !canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
        columns = Math.floor(width / 20);
        for (let x = 0; x < columns; x++) {
          drops[x] = 1;
        }
    }
    window.addEventListener('resize', handleResize);

    const chars = ['0', '1'];

    const draw = () => {
      if (!ctx) return;
      if (resolvedTheme === 'dark') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#E6C200'; // Gold accent color
      } else {
        // Use a white fill with low opacity to create the fading effect in light mode
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#000000'; // Black text color for light mode
      }

      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 33);

    return () => {
        clearInterval(intervalId);
        window.removeEventListener('resize', handleResize);
    };
  }, [resolvedTheme]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default MatrixAnimation;
