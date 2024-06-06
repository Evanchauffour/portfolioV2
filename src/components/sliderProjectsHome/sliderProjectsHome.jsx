import React from 'react'
import Link from 'next/link';
import styles from './sliderProject.module.scss'
import {useTranslations} from 'next-intl';

export default function SliderProjectsHome() {

  const t = useTranslations('home.widget.projects');

  return (
    <>
        <Link href="/projects" className={`relative flex size-full flex-1 items-center flex-col justify-center ${styles.projectHome}`}>
            <h2 className='lg:text-8xl sm:text-6xl text-5xl light:text-lightText darkTheme:text-darkText'>{t('title')}</h2>
            <p className='text-center mx-10 text-xs sm:text-base sm:mx-40 opacity-50 mt-5'>{t('content')}</p>
        </Link>
    </>
  )
}
