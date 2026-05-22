'use client';
import { forwardRef, useMemo, useRef, useEffect } from 'react';
import './VariableProximity.css';

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef, // kept for API compat, but not needed for mouse tracking
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props;

  const letterRefs = useRef([]);
  // Store raw viewport mouse position — no containerRef dependency
  const mousePos = useRef({ x: -9999, y: -9999 });
  const rafId = useRef(null);

  const parsedSettings = useMemo(() => {
    const parseSettings = str =>
      new Map(
        str.split(',').map(s => {
          const parts = s.trim().split(' ');
          return [parts[0].replace(/['"]/g, ''), parseFloat(parts[1])];
        })
      );
    const fromMap = parseSettings(fromFontVariationSettings);
    const toMap = parseSettings(toFontVariationSettings);
    return Array.from(fromMap.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toMap.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const getFalloff = (distance) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential': return norm ** 2;
      case 'gaussian': return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      default: return norm; // linear
    }
  };

  // Track raw viewport mouse position — attaches once on mount, no deps issues
  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const onTouchMove = (e) => {
      mousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []); // ← empty deps — mount once, always works

  // rAF loop — stable, runs once, reads mousePos ref directly
  useEffect(() => {
    const loop = () => {
      const { x, y } = mousePos.current;

      letterRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

        if (dist >= radius) {
          el.style.fontVariationSettings = fromFontVariationSettings;
        } else {
          const f = getFalloff(dist);
          el.style.fontVariationSettings = parsedSettings
            .map(({ axis, fromValue, toValue }) =>
              `'${axis}' ${fromValue + (toValue - fromValue) * f}`
            )
            .join(', ');
        }
      });

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromFontVariationSettings, toFontVariationSettings, radius, falloff]);
  // ↑ Only re-run if these props actually change (not on every render)

  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`variable-proximity ${className}`}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter) => {
            const idx = letterIndex++;
            return (
              <span
                key={idx}
                ref={(el) => { letterRefs.current[idx] = el; }}
                style={{ display: 'inline-block' }}
                aria-hidden="true"
              >
                {letter}
              </span>
            );
          })}
          {wi < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;
