import { Variants } from 'framer-motion';

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export const paxTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] };
