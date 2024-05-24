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
import { useTheme } from "next-themes";
import ThemeSelector from '@/components/themeSelector';
import Lottie from "lottie-react";
import clickEffectWhite from "../../public/lottie/clickEffectWhite.json";
import clickEffectBlack from "../../public/lottie/clickEffectDark.json";
import Icon from '@/components/icon';

export default function Home() {

  const [isOpen, setIsOpen] = useState(true)
  const { theme, setTheme } = useTheme();

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

  const cursorAnim = {
    open: { opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.6,
        ease: "easeInOut",
      },
    },
    closed: { opacity: 0, 
      transition: {
        delay: .2,
        duration: .5,
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

  const handleClick = () => {
    setIsOpen(false)
  }

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  };

  return (
    <>
      <AnimatePresence>
      {isOpen && (
        <motion.div className={`absolute z-10 flex h-screen w-screen flex-row overflow-hidden ${styles.beforeHome}`} onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: .5}}>
        <div className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}>
          <GrowLetters text='Evan' delay={1.2} weightEnd='800'>
            <motion.h1 
              className={`z-10 inline-block bg-gradient-to-r bg-clip-text text-[30vw] font-light text-transparent theme1:from-lightPrimary theme1:to-lightAccent theme2:from-theme2-primary theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent`}
              variants={h1Anim}
              initial={"closed"}
              animate={ "open" }
              exit={"closed"}
            >
            </motion.h1>
          </GrowLetters>
          <GrowLetters text='Developpeur full stack' delay={1.8} isAnimated={true} weightEnd='100'>
            <motion.h2 
              className={`z-10 sm:text-[3vw] text-[4vw] font-extrabold uppercase light:text-lightText darkTheme:text-darkText`}
              variants={h2Anim}
              initial={"closed"}
              animate={ "open" }
              exit={"closed"}
              >
              </motion.h2>
          </GrowLetters>
          <motion.div 
            className='relative size-20 sm:size-40 z-50'
            variants={cursorAnim}
            initial={"closed"}
            animate={ "open" }
            exit={"closed"}
          >
          {theme === 'dark' ? <Lottie animationData={clickEffectWhite} /> : <Lottie animationData={clickEffectBlack} />}
          </motion.div>
        </div>
        <div className='flex size-full flex-row items-center justify-center'>
          <motion.div 
            className={`absolute -z-10 size-[100vh] sm:size-[100vw] flex-1 rounded-full light:bg-darkBackground darkTheme:bg-lightBackground`}
            variants={variantsSlide}
            initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
            animate={ "open"}
            exit={"closed"}
          >
          </motion.div>
          <motion.div 
            className={`absolute -z-10 size-[100vh] sm:size-[100vw] flex-1 rounded-full light:bg-lightBackground darkTheme:bg-darkBackground`}
            variants={variantsSlide2}
            initial={{ scaleX: 0, scaleY: 0, opacity: 1 }}
            animate={ "open"}
            exit={"closed"}
          >
          </motion.div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
      {!isOpen && (
      <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration: .5, delay: 1}}
      className={`grid ${styles.homeContainer}`} 
      >
        <Widget gridArea='me' delay={1.5} x={-40}>
          <MyPresnetation />
        </Widget>
        <Widget gridArea='projects' delay={1.7} y={40}>
          <SliderProjectsHome />
        </Widget>
        <Widget gridArea='game' delay={1.9} x={40}>
          <Game />
        </Widget>
        <Widget gridArea='themeColor' delay={2.1} y={-40}>
          <ThemeSelector customClass="size-20"/>
        </Widget>
        <Widget gridArea='darkMode' delay={2.2} y={-40}>
            <button className='relative size-20 rounded-full' onClick={() => handleTheme()}>
            {theme === 'light' ? (
              <Image src='https://img.icons8.com/ios-filled/100/crescent-moon.png' alt='moon' width={80} height={80} />
            ) : (
              <Image src='https://img.icons8.com/ios/100/FFFFFF/sun--v1.png' alt='sun' width={80} height={80} />
            )}
            </button>
        </Widget>
        <Widget gridArea='github' delay={2.3} x={40}>
          <a href='https://github.com/Evanchauffour' target='_blank' className='size-full flex items-center justify-center z-10'>
            <Icon src='/github.svg' width={80} height={80} />
          </a>
        </Widget>
        <Widget gridArea='linkedin' delay={2.3} x={40}>
          <a href='https://www.linkedin.com/in/evan-chauffour/' target='_blank' className='size-full flex items-center justify-center z-10'>
            <Icon src='/linkedin.svg' width={80} height={80} />
          </a>
        </Widget>
      </motion.div>
      )}
    </>
  );
}
