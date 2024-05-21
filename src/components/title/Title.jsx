'use client'

import styles from './title.module.scss'
import {useScroll, useMotionValueEvent} from "framer-motion"
import { useEffect, useState } from 'react';

export default function Title({title, otherStyle = '', multiplier = 1.6, color}) {
    const [lettersHead, setLettersHead] = useState([]);
    const [scroll, setScroll] = useState(null);
    const [size, setSize] = useState(null);
  
    useEffect(() => {
    const textHead = title;
    const letterArrayHead = textHead.split("");
    setLettersHead(letterArrayHead);

    const handleResize = () => {
      setSize(window.innerWidth / letterArrayHead.length);
    };
  
    
    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('onload', handleResize);
      window.addEventListener('resize', handleResize);
    }
  
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('onload', handleResize);
        window.removeEventListener('resize', handleResize);
      }
    };
  
    }, [title, size]);
    const { scrollY } = useScroll()
  
    useMotionValueEvent(scrollY, "change", (latest) => {
      setScroll(latest)
    })
    
    return (
        <h1 className={`${styles.title} ${otherStyle} inline-block bg-gradient-to-r from-darkPrimary to-darkAccent bg-clip-text text-transparent theme2:from-theme2-primary theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent`} style={{scale: (scroll / 600 + 1, scroll / 600 + 1)}}>
        {lettersHead.length === 0 
        ? `${title}`
        : (
            lettersHead.map((letter, index) => (
            <span className={`${styles[`span${index}`]}`} key={index} style={{ fontVariationSettings: `'wght' ${scroll + 400}`, fontSize: `${size * multiplier }px`}}>{letter}</span>
            ))
        )}
        </h1>
    )
  }