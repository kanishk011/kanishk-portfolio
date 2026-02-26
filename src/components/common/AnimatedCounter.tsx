import { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import { COUNTER_DURATION } from '../../utils/constants';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  target,
  duration = COUNTER_DURATION,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCurrent(Math.round(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return (
    <Typography variant="h2" component="span" sx={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
      {prefix}{current.toLocaleString()}{suffix}
    </Typography>
  );
}
