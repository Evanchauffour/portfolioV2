'use client'

import Footer from "../../../components/footer/Footer";
import Title from '../../../components/title/Title'
import Image from 'next/image'
import pp from '../../../../public/pp.JPG'
import Header from "../../../components/header/Header";
import { motion } from 'framer-motion';
import {useTranslations} from 'next-intl';
import { useEffect } from "react";


export default function About() {

  const themeColor = [
    {
      color: 'from-darkPrimary to-lightAccent',
      theme: 'theme1'
    },
    {
      color: 'from-red-500 to-lightAccent',
      theme: 'theme2'
    },
    {
      color: 'from-theme3-primary to-theme3-accent',
      theme: 'theme3'
    }
  ];

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.getItem('themeColor')
      document.documentElement.classList.remove('theme1', 'theme2', 'theme3');
      document.documentElement.classList.add(themeColor[localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 0].theme); 
    }
  }, []);

  const t = useTranslations('about');

  return (
    <>
      <Header color='secondary'/>
        <motion.div className='flex w-full md:mt-28 mt-12 flex-row items-center justify-center overflow-hidden'>
          <Title title={t('title')} color='secondary'/>
        </motion.div>
        <div className='flex my-10 flex-row items-center justify-center'>
          <div className='relative flex h-full flex-col lg:flex-row'>
            <div className='lg:size-[500px] h-80 w-full rounded-lg translate-x-0 lg:translate-x-12 hidden lg:flex'>
              <Image 
                src={pp} alt='Ma photo'
                className='size-full object-cover'
              />
            </div>
            <div className='block sm:w-[500px] w-fulltranslate-x-0 lg:-translate-x-12 self-center bg-gradient-to-r theme1:from-darkSecondary theme1:to-darkPrimary theme3:from-theme3-primary theme3:to-theme3-accent theme2:from-theme2-primary theme2:to-theme2-accent p-1'>
              <div className="p-7 light:bg-lightBackground darkTheme:bg-darkBackground">
                <h2 className='mb-5 text-2xl light:text-lightText darkTheme:text-lightBackground'>Hey ! <br/>{t('me')}<br/>{t('jobAndAge')}</h2>
                <p className='font-sora font-thin leading-5 light:text-lightText darkTheme:text-lightBackground'>{t('content')} <a href='https://www.weprode.com/' target='blank_' className='underline'>WeProde</a></p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
  </>
  )
}
