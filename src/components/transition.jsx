'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function transition({children}) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
        <div key={pathname}>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5, delay: 1}}
            className="z-50 opacity-0"
            >
                {children}
            </motion.div>
        </div>
    </AnimatePresence>
  )
}
