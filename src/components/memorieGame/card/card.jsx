import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function Card({ handleClick, skill, id }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{duration: .3, delay: id / 15}}
      className={`flex cursor-pointer items-center justify-center rounded-lg theme2:text-theme2-accent theme1:text-darkPrimary theme3:text-theme3-primary border-darkText bg-white ${styles.card} ${
        skill.status === 'active' ? styles.active : ''
      } ${
        skill.status === 'matched' ? styles.matched : ''
      }`}
      onClick={() => handleClick(id)}
    >
      <div className={`${styles.front} text-2xl font-extrabold`}>?</div>
      <div className={`${styles.back} flex flex-col items-center p-4`}>
        <div className="size-full relative">
          <Image src={skill.linkImg} alt='skillsImg' layout='fill'/>
        </div>
      </div>
    </motion.div>
  );
}
