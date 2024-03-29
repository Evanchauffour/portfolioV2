'use client'

import Link from 'next/link'
import styles from './header.module.scss'

export default function Header({color}) {

  return (
    <>
    <header className={`relative z-10 flex h-20 w-full flex-row items-center bg-background`}>
        <nav className='ml-8 flex flex-row gap-x-16'>
            <Link href="/" className={`${styles.navItem} font-normal text-text`}>Accueil</Link>
            <Link href="/about" className={`${styles.navItem} font-normal text-text`}>À propos</Link>
            <Link href="/projects" className={`${styles.navItem} font-normal text-text`}>Projets</Link>
        </nav>
    </header>
    </>
  )
}
