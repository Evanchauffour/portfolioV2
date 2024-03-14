'use client'

import { React, useEffect, useState } from 'react';
import Footer from "@/components/footer/Footer";
import Transition from "./transition";
import styles from './home.module.scss'
import 'swiper/swiper-bundle.css';
import SliderProjectsHome from '@/components/sliderProjectsHome/sliderProjectsHome';
import MyPresnetation from '@/components/myPresentation/myPresnetation';
import Game from '@/components/memorieGame/game';
import { AnimatePresence, motion } from 'framer-motion';


export default function Home() {

  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveredLeft, setIsHoveredLeft] = useState(false)
  const [isHoveredRight, setIsHoveredRight] = useState(false)
  const [isHoveredText, setIsHoveredText] = useState(false)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, [mousePos]);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  }  

  const variantsSlide = {
    open: { scaleX: 1 },
    closed: { scaleX: 0},
  }

  const variantsCursor = {
    open: { opacity: 1 },
    closed: { opacity: 0},
  }

  const handleClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  return (
    <>
        {isVisible && (
        <motion.div className={`absolute z-10 flex flex-row w-screen h-screen ${styles.beforeHome}`} onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
            <motion.h1 variants={variants} initial={{ opacity: 0, y: 20 }} animate={ isOpen ? "open" : "closed" } transition={{duration: 0.5, delay: isOpen ? 1 : .5 }} onMouseEnter={() => setIsHoveredText(true)} onMouseLeave={() => setIsHoveredText(false)} className={`text-9xl font-extrabold text-text z-10`}>Evan</motion.h1>
            <motion.h2 variants={variants} initial={{ opacity: 0, y: 20 }} animate={ isOpen ? "open" : "closed" } transition={{duration: 0.5, delay: isOpen ? 1.2 : .5 }} onMouseEnter={() => setIsHoveredText(true)} onMouseLeave={() => setIsHoveredText(false)} className={`text-7xl font-extrabold text-text uppercase z-10`}>Developpeur web</motion.h2>
            <div className='absolute flex flex-row w-full origin-bottom'>
              <motion.div variants={variantsSlide} initial={{ scaleX: 0 }} animate={ isOpen ? "open" : "closed"} transition={{ duration: .5,  delay: isOpen ? 1.7 : 0, ease: "linear" }} className={`flex-1 h-1 bg-primary mt-4 origin-right`}></motion.div>
              <motion.div variants={variantsSlide} initial={{ scaleX: 0 }} animate={ isOpen ? "open" : "closed"} transition={{ duration: .5, delay: isOpen ? 1.7 : 0, ease: "linear" }} className={`flex-1 h-1 bg-secondary mt-4 origin-left ease-in`}></motion.div>
            </div>
          </div>
          <motion.div variants={variantsSlide} initial={{ scaleX: 0 }} animate={ isOpen ? "open" : "closed"} transition={{ duration: 1, delay: isOpen ? 0 : 1 }} onMouseEnter={() => setIsHoveredLeft(true)} onMouseLeave={() => setIsHoveredLeft(false)} className={`w-1/2 h-full bg-secondary origin-left -z-10`}></motion.div>
          <motion.div variants={variantsSlide} initial={{ scaleX: 0 }} animate={isOpen ? "open" : "closed"} transition={{ duration: 1, delay: isOpen ? 0 : 1 }} onMouseEnter={() => setIsHoveredRight(true)} onMouseLeave={() => setIsHoveredRight(false)} className={`w-1/2 h-full bg-primary origin-right -z-10`}></motion.div>
          <motion.div style={{ transform: `translate(${mousePos.x - 91}px, ${mousePos.y - 91}px)` }} 
               className={`absolute w-48 h-48 rounded-full text-background flex justify-center items-center text-xl text-center 
               ${isHoveredLeft && 'bg-primary text-background'}  ${isHoveredRight && 'bg-secondary text-background'}  
               ${isHoveredText && 'bg-background text-text'} 
               ${styles.cursor}`}
               variants={variantsCursor}
               initial={{ opacity: 0 }} animate={ isOpen ? "open" : "closed" } transition={{ duration: 0.5, delay: isOpen ? 1.5 : 0 }}
          >
            Cliquer pour continuer
          </motion.div>
        </motion.div>
        )}
      {!isOpen && (
        <div className={`w-full grid ${styles.homeContainer}`} style={{minHeight: '100vh'}}>
        <div className={`bg-background relative border-r-4 border-primary ${styles.widget}`} style={{gridArea: 'me'}}>
          <MyPresnetation />
        </div>
        <div className={`bg-background flex flex-col items-center border-b-4 border-secondary ${styles.widget}`} style={{gridArea: 'projects'}}>
          <SliderProjectsHome />
        </div>
        <div className={`bg-background flex flex-col justify-center items-center gap-10 ${styles.widget}`} style={{gridArea: 'game'}}>
          <Game />
        </div>
      </div>
      )}
    </>
  );
}
