'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Tags({technoImg, index, label}) {
  return (
    <motion.li 
    key={index}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: .5, delay: .7 + index/5}}
    className={`rounded-lg p-2 flex flex-row items-center gap-2 bg-primary text-background`}
  >
    <Image src={technoImg} alt='logoTechnos' width={30} height={30}/>
    {label}
  </motion.li>
  );
}
