'use client'

import styles from './title.module.scss'
import {useScroll, useMotionValueEvent} from "framer-motion"
import { useEffect, useRef, useState } from 'react';

export default function Title({title, otherStyle = '', multiplier = 1.6, color}) {
    const [lettersHead, setLettersHead] = useState([]);
    const [scroll, setScroll] = useState(null);
    const [size, setSize] = useState(null);
    const windowWidth = useRef(window.innerWidth);
  
    useEffect(() => {
    const textHead = title;
    const letterArrayHead = textHead.split("");
    setLettersHead(letterArrayHead);
    setSize(windowWidth.current / letterArrayHead.length);
  
    }, [title, size, windowWidth]);
    const { scrollY } = useScroll()
  
    useMotionValueEvent(scrollY, "change", (latest) => {
      setScroll(latest)
    })
    
    return (
        <h1 className={`${styles.title} ${otherStyle} text-${color}`} style={{scale: (scroll / 600 + 1, scroll / 600 + 1)}}>
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