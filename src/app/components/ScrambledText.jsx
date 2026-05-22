"use client";
import React, { useEffect, useRef } from 'react';
import './ScrambledText.css';

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}) => {
  const rootRef = useRef(null);
  const charsRef = useRef([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const p = rootRef.current.querySelector('p');
    if (!p) return;
    
    const text = p.innerText;
    p.innerHTML = '';
    
    charsRef.current = text.split('').map((char) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.display = 'inline-block';
      span.style.willChange = 'transform';
      span.dataset.content = char;
      span.innerText = char;
      p.appendChild(span);
      return span;
    });

    const handleMove = (e) => {
      charsRef.current.forEach(c => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          scrambleChar(c, duration * (1 - dist / radius), speed, scrambleChars);
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);

    return () => {
      el.removeEventListener('pointermove', handleMove);
      p.innerHTML = text;
    };
  }, [radius, duration, speed, scrambleChars, children]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p>{children}</p>
    </div>
  );
};

const scrambleChar = (el, dur, spd, chars) => {
  if (el.dataset.scrambling) return;
  el.dataset.scrambling = "true";
  
  const original = el.dataset.content;
  if (!original.trim()) {
    el.dataset.scrambling = "";
    return;
  }

  const startTime = performance.now();
  const durationMs = dur * 1000;
  
  const update = (time) => {
    const elapsed = time - startTime;
    if (elapsed < durationMs) {
      if (Math.random() < spd) {
        el.innerText = chars[Math.floor(Math.random() * chars.length)];
      }
      requestAnimationFrame(update);
    } else {
      el.innerText = original;
      el.dataset.scrambling = "";
    }
  };
  
  requestAnimationFrame(update);
};

export default ScrambledText;
