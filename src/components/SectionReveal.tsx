import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const SectionReveal = ({ children, className = '', delay = 0 }: SectionRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay }}
    className={className}
  >
    {children}
  </motion.div>
);
