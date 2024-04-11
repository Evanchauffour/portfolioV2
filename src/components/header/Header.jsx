'use client'

import Link from 'next/link'
import styles from './header.module.scss'
import Image from 'next/image'
import { useTheme } from "next-themes";

export default function Header({color}) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
    <header className={`relative z-10 flex h-20 w-full flex-row items-center justify-between light:bg-lightBackground dark:bg-darkBackground`}>
        <nav className='ml-8 flex flex-row gap-x-16'>
            <Link href="/" className={`${styles.navItem} font-normal light:text-lightText dark:text-darkText`}>Accueil</Link>
            <Link href="/about" className={`${styles.navItem} font-normal light:text-lightText dark:text-darkText`}>À propos</Link>
            <Link href="/projects" className={`${styles.navItem} font-normal light:text-lightText dark:text-darkText`}>Projets</Link>
        </nav>
        <button className='relative mr-8 size-10 rounded-full' onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
          {theme === 'light' ? (
            <Image src='https://img.icons8.com/ios-filled/100/crescent-moon.png' alt='moon' width={80} height={80} />
          ) : (
            <Image src='https://img.icons8.com/ios/100/FFFFFF/sun--v1.png' alt='sun' width={80} height={80} />
          )}
        </button>
    </header>
    </>
  )
}
