'use client'

import { useEffect, useMemo } from "react";
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import pp from '../../../../public/pp.JPG';
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import Title from '../../../components/title/Title';

export default function About() {
  const themeColor = useMemo(() => [
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
  ], []);

  useEffect(() => {
    const applyTheme = () => {
      if (typeof localStorage !== 'undefined') {
        const selectedTheme = localStorage.getItem('themeColor') || 0;
        const theme = themeColor[selectedTheme].theme;
        document.documentElement.classList.remove('theme1', 'theme2', 'theme3');
        document.documentElement.classList.add(theme);
      }
    };

    applyTheme();
  }, [themeColor]);

  const t = useTranslations('about');

  return (
    <>
      <Header color='secondary'/>
      <motion.div className='mt-12 flex w-full flex-row items-center justify-center overflow-hidden md:mt-28'>
        <Title title={t('title')} color='secondary'/>
      </motion.div>
      <div className='min-[500px]: my-10 flex flex-row items-center justify-center'>
        <div className='relative flex h-full flex-col lg:flex-row'>
          <div className='hidden h-80 w-full translate-x-0 rounded-lg lg:flex lg:size-[500px] lg:translate-x-12'>
            <Image 
              src={pp} alt='Ma photo'
              className='size-full object-cover'
            />
          </div>
          <div className='block w-full translate-x-0 self-center bg-gradient-to-r p-1 theme1:from-darkSecondary theme1:to-darkPrimary theme2:from-theme2-primary theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent sm:w-[500px] lg:-translate-x-12'>
            <div className="p-7 light:bg-lightBackground darkTheme:bg-darkBackground">
              <h2 className='mb-5 text-2xl light:text-lightText darkTheme:text-lightBackground'>Hey ! <br/>{t('me')}<br/>{t('jobAndAge')}</h2>
              <p className='font-sora font-thin leading-5 light:text-lightText darkTheme:text-lightBackground'>{t('content')} <a href='https://www.weprode.com/' rel='noopener noreferrer' target='_blank' className='underline'>WeProde</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
