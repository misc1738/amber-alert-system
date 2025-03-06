
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface FadeContentProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

const FadeContent = ({ children, duration = 500, delay = 0 }: FadeContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration / 1000, // Convert to seconds for framer-motion
        delay: delay / 1000,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
