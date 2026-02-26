import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';

interface AnimatedContainerProps {
  children: ReactNode;
  variants?: Variants;
}

export default function AnimatedContainer({ children, variants = staggerContainer }: AnimatedContainerProps) {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
