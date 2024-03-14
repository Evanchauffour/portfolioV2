import React, { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ScrollIcon() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className='scrollInfoIcon'>
    </motion.div>
  );
}
