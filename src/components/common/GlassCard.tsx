import { motion } from 'framer-motion';
import { Card, CardContent } from '@mui/material';
import type { ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { cardHover } from '../../utils/animations';

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  sx?: SxProps<Theme>;
  onClick?: () => void;
  contentSx?: SxProps<Theme>;
}

export default function GlassCard({ children, hover = false, sx, onClick, contentSx }: GlassCardProps) {
  const Wrapper = hover ? motion.div : 'div';
  const motionProps = hover
    ? { variants: cardHover, initial: 'rest', whileHover: 'hover' }
    : {};

  return (
    <Wrapper {...motionProps} style={hover ? { cursor: onClick ? 'pointer' : 'default' } : undefined}>
      <Card onClick={onClick} sx={{ height: '100%', ...sx }}>
        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 }, ...contentSx }}>
          {children}
        </CardContent>
      </Card>
    </Wrapper>
  );
}
