import React from 'react'
import Link from 'next/link';
import styles from './sliderProject.module.scss'

export default function SliderProjectsHome() {
  return (
    <>
        <Link href="/projects" className={`relative flex size-full flex-1 items-center flex-col justify-center ${styles.projectHome}`}>
            <h2 className='lg:text-8xl sm:text-6xl text-5xl light:text-lightText darkTheme:text-darkText'>Mes projets</h2>
            <p className='text-center mx-10 text-xs sm:text-base sm:mx-40 opacity-50 mt-5'>Découvrez tous mes projets réalisés dans un cadre professionnel ou personnel.</p>
        </Link>
    </>
  )
}
