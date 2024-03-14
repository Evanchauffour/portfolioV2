'use client'

import Link from 'next/link'
import styles from './header.module.scss'

export default function Header({color}) {

  return (
    <>
    <header className={`relative w-full h-20 flex flex-rom items-center z-10 bg-${color}`}>
        <nav className='flex flex-row gap-x-16 ml-8'>
            <Link href="/" className={`${styles.navItem} text-text font-normal`}>Accueil</Link>
            <Link href="/about" className={`${styles.navItem} text-text font-normal`}>À propos</Link>
            <Link href="/projects" className={`${styles.navItem} text-text font-normal`}>Projets</Link>
        </nav>
    </header>
    </>
  )
}
