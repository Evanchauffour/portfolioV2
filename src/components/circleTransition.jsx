'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react';

export default function transition() {
  const pathname = usePathname()

  const variantsSlide = useMemo(() => ({
    open: { scaleX: 1.5, scaleY: 1.5, transition: { duration: 1, ease: 'easeInOut' } },
  }), []);

  const variantsSlide2 = useMemo(() => ({
    open: { scaleX: 1.5, scaleY: 1.5, transition: { duration: 1, delay: 0.2, ease: 'easeInOut' } },
  }), []);


  return (
    <AnimatePresence mode='wait'>
        <motion.div 
        key={pathname} 
        className='absolute flex h-screen w-screen flex-row items-center justify-center'
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0, delay: 1}}
        >
          <motion.div 
              className={`absolute z-50 size-[100vh] flex-1 rounded-full light:bg-darkBackground darkTheme:bg-lightBackground sm:size-[100vw]`}
              variants={variantsSlide}
              initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
              animate={ "open"}
              exit={"closed"}
            >
            </motion.div>
            <motion.div 
              className={`absolute z-50 size-[100vh] flex-1 rounded-full light:bg-lightBackground darkTheme:bg-darkBackground sm:size-[100vw]`}
              variants={variantsSlide2}
              initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
              animate={ "open"}
            >
            </motion.div>
        </motion.div>
    </AnimatePresence>
  )
}
