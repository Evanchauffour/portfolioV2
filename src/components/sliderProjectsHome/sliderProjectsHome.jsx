import React from 'react'
import Link from 'next/link';
import styles from './sliderProject.module.scss'

export default function SliderProjectsHome() {
  return (
    <>
        <Link href="/projects" className={`relative flex size-full flex-1 items-center justify-center ${styles.projectHome}`}>
            <h2 className='lg:text-8xl sm:text-6xl text-5xl light:text-lightText darkTheme:text-darkText'>Mes projets</h2>
        </Link>
    </>
  )
}
