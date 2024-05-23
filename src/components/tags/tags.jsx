'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Tags({technoImg, index, label, isImgDisplayed = true, animationDelay = 0.7}) {
  return (
    <motion.li 
    key={index}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: .5, delay: animationDelay + index/5}}
    className={`flex flex-row items-center gap-1 rounded-lg text-xs sm:text-base mr-2 light:text-lightText darkTheme:text-darkText`}
  >

    {isImgDisplayed && <Image src={technoImg} alt='logoTechnos' width={30} height={30} className='sm:size-7 size-5'/>}
    {label}
  </motion.li>
  );
}
