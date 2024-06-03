
"use client";
import '../components/style11.css';
import { useEffect } from 'react';

const DustCursorScript = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Adjust the number of stars and animation duration
      const arr = [1, 0.9, 0.8];

      arr.forEach((i) => {
        const x = (1 - i) * 2;
        const star = document.createElement('div');

        star.className = 'star';
        star.style.top = `${e.pageY + Math.round(Math.random() * x - x / 2)}px`;
        star.style.left = `${e.pageX + Math.round(Math.random() * x - x / 2)}px`;

        document.body.appendChild(star);

        setTimeout(() => {
          document.body.removeChild(star);
        }, Math.round(Math.random() * i * 600)); // Adjust animation duration here
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default DustCursorScript;
