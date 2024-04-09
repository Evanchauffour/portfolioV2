'use client'

import { React, useEffect, useState } from 'react';
import styles from '@/app/home.module.scss'
import 'swiper/swiper-bundle.css';
import SliderProjectsHome from '@/components/sliderProjectsHome/sliderProjectsHome';
import MyPresnetation from '@/components/myPresentation/myPresnetation';
import Game from '@/components/memorieGame/game';
import { AnimatePresence, motion } from 'framer-motion';
import GrowLetters from '@/components/growLetterAnim/GrowLetters';
import Widget from '@/components/widget/Widget';
import Image from 'next/image';


export default function Home() {

  const [isOpen, setIsOpen] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
  }, [mousePos]);

  const h1Anim = {
    open: { opacity: 1, y: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeInOut",
      },
    },
    closed: { opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }  

  const h2Anim = {
    open: { opacity: 1, y: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: "easeInOut",
      },
    },
    closed: { opacity: 0, y: -20, 
      transition: {
        delay: .2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }  

  const variantsSlide = {
    open: { scaleX: 1.5, scaleY: 1.5,
      transition: {
        duration: 1,
        delay: .2,
        ease: "easeInOut",
      },
    },
    closed: { scaleX: 0, scaleY: 0,
      transition: {
        delay: .7,
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  const variantsSlide2 = {
    open: { scaleX: 1.5, scaleY: 1.5,
      transition: {
        duration: 1,
        delay: .4,
        ease: "easeInOut",
      },
    },
    closed: { scaleX: 0, scaleY: 0,
      transition: {
        delay: .5,
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  const variantsCursor = {
    open: { opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
    closed: { opacity: 0, 
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <motion.div className={`absolute z-10 flex h-screen w-screen flex-row overflow-hidden ${styles.beforeHome}`} onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: .5}}>
        <div className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}>
          <GrowLetters text='Evan' delay={1.2} weightEnd='800'>
            <motion.h1 
              className={`z-10 text-[30vw] font-light text-text`}
              variants={h1Anim}
              initial={"closed"}
              animate={ "open" }
              exit={"closed"}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
            </motion.h1>
          </GrowLetters>
          <GrowLetters text='Developpeur full stack' delay={1.8} isAnimated={true} weightEnd='100'>
            <motion.h2 
              className={`z-10 text-[3vw] font-extrabold uppercase text-text`}
              variants={h2Anim}
              initial={"closed"}
              animate={ "open" }
              exit={"closed"}
              >
              </motion.h2>
          </GrowLetters>
        </div>
        <div className='flex size-full flex-row items-center justify-center'>
          <motion.div 
            className={`absolute -z-10 size-[100vw] flex-1 rounded-full bg-text`}
            variants={variantsSlide}
            initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
            animate={ "open"}
            exit={"closed"}
          >
          </motion.div>
          <motion.div 
            className={`absolute -z-10 size-[100vw] flex-1 rounded-full bg-background`}
            variants={variantsSlide2}
            initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
            animate={ "open"}
            exit={"closed"}
          >
          </motion.div>
        </div>
        {/* <motion.div 
          style={{ transform: `translate(${mousePos.x - 56}px, ${mousePos.y - 56}px)` }} 
          className={`absolute flex size-28 items-center justify-center rounded-full border-2 text-center text-xl capitalize transition-all duration-100 ${!hovered ? 'border-primary text-text' : 'bg-text text-background'} ${styles.cursor}`}
          variants={variantsCursor}
          initial={"closed"} animate={ "open" } exit={"closed"}
        >
          Cliquer
        </motion.div> */}
      </motion.div>
      )}
      </AnimatePresence>
      {!isOpen && (
      <div 
      className={`grid ${styles.homeContainer}`} 
      style={{minHeight: 'calc(100vh - 40px)'}}
      >
        <Widget gridArea='me'>
          <MyPresnetation />
        </Widget>
        <Widget gridArea='projects'>
          <SliderProjectsHome />
        </Widget>
        <Widget gridArea='game'>
          <Game />
        </Widget>
        <Widget gridArea='themeColor'>
          <button className='size-20 rounded-full bg-gradient-to-l from-primary to-accent'></button>
        </Widget>
        <Widget gridArea='darkMode'>
          <button className='relative size-20 rounded-full'>
            <Image src='https://img.icons8.com/ios/100/FFFFFF/sun--v1.png' alt='sun' layout='fill' />
          </button>
        </Widget>
      </div>
      )}
    </>
  );
}
