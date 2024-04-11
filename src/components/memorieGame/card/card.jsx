import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function Card({ handleClick, skill, id }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{duration: .3, delay: id / 15}}
      className={`flex cursor-pointer items-center justify-center rounded-lg border border-darkPrimary text-darkPrimary ${styles.card} ${
        skill.status === 'active' ? styles.active : ''
      } ${
        skill.status === 'matched' ? styles.matched : ''
      }`}
      onClick={() => handleClick(id)}
    >
      <div className={`${styles.front} text-2xl font-extrabold`}>?</div>
      <div className={`${styles.back} flex flex-col items-center`}>
        <Image src={skill.linkImg} alt='skillsImg' layout='fill' className="object-contain p-6"/>
      </div>
    </motion.div>
  );
}
