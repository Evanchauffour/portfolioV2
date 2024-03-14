'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TransitionAbout({ children }) {
  return (
    <AnimatePresence>
      <motion.div 
        className='w-screen bg-primary origin-left overflow-x-hidden'
        initial={{ scaleY: 1, scaleX: 0, overflow: 'hidden'}}
        animate={{ scaleY: 1, scaleX: 1, overflow: 'auto'}}
        transition={{ duration: .5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
