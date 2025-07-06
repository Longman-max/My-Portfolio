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

    // --- "Longman" Animation Setup ---
    const word = 'Longman';
    const wordDroplets: { char: string; y: number; active: boolean }[] = [];
    const wordColumnStartIndex = Math.max(0, columns - word.length - 2); // Position on the right
    let frameCount = 0;
    const startDelayFrames = 60; // Approx 2 seconds
    const letterDelayFrames = 10; // Approx 0.3s between letters

    for (let i = 0; i < word.length; i++) {
        wordDroplets.push({
            char: word[i],
            y: 1,
            active: false,
        });
    }

    const handleResize = () => {
        if (!canvas || !canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
        columns = Math.floor(width / 20);
        for (let x = 0; x < columns; x++) {
          drops[x] = 1;
        }
        // This will be handled by the effect re-running, which is fine.
    }
    window.addEventListener('resize', handleResize);

    const chars = ['0', '1'];

    const draw = () => {
      if (!ctx) return;
      // Draw background with fade effect
      if (resolvedTheme === 'dark') {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#E6C200'; // Gold accent color for normal chars
      } else {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#000000'; // Black text for normal chars in light mode
      }

      ctx.font = '15px monospace';

      // Draw normal matrix characters
      for (let i = 0; i < drops.length; i++) {
        // Reserve space for the animated word
        if (i >= wordColumnStartIndex && i < wordColumnStartIndex + word.length) {
            continue;
        }
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // --- Draw "Longman" Animation ---
      frameCount++;
      
      // Set standout style for "Longman"
      if (resolvedTheme === 'dark') {
          ctx.fillStyle = '#90EE90'; // Brighter green for standout effect
      } else {
          ctx.fillStyle = '#006400'; // Dark green for contrast in light mode
      }
      ctx.font = 'bold 16px monospace';

      let allLettersOffScreen = true;

      for (let i = 0; i < wordDroplets.length; i++) {
          const droplet = wordDroplets[i];
          
          // Activate letters with a staggered delay
          if (frameCount > startDelayFrames + (i * letterDelayFrames)) {
              droplet.active = true;
          }

          if (droplet.active) {
            ctx.fillText(droplet.char, (wordColumnStartIndex + i) * 20, droplet.y * 20);
            droplet.y++;

            if (droplet.y * 20 < height + 100) { // check if letter is still on screen
                allLettersOffScreen = false;
            }
          } else {
              // If any letter is not yet active, the sequence isn't finished
              allLettersOffScreen = false;
          }
      }
      
      // Reset animation loop
      if (allLettersOffScreen) {
          frameCount = 0;
          for (const droplet of wordDroplets) {
              droplet.y = 1;
              droplet.active = false;
          }
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
