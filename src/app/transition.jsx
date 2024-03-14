'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Transition({ children }) {
  return (
    <AnimatePresence>
      <motion.div 
        className='w-screen bg-secondary origin-top'
        initial={{ scaleY: 0, scaleX: 1}}
        animate={{ scaleY: 1, scaleX: 1}}
        transition={{ duration: .5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
