'use client'

import Link from 'next/link'
import styles from './header.module.scss'
import Image from 'next/image'
import { useTheme } from "next-themes";
import ThemeSelector from '../themeSelector';
import { useEffect, useState } from 'react';
import LocaleSwitcherSelect from '../LangSwitcher';

export default function Header() {

  const { theme, setTheme } = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true);

    if(menuVisible){
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }
  }, [menuVisible])

  if (!mounted) {
    return null
  }

  return (
    <header className={`relative z-10 flex h-20 w-full flex-row items-center justify-between`}>
        <nav className={`md:ml-8 md:translate-x-0 ${menuVisible ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 flex md:flex-row md:gap-x-16 md:relative md:w-auto md:h-auto fixed ml-0 top-0 left-0 w-screen h-screen flex-col items-center justify-center gap-y-5 z-10 md:darkTheme:bg-transparent md:light:bg-transparent darkTheme:bg-darkBackground light:bg-lightBackground`}>
            <Link href="/" className={`${styles.navItem} navItem font-normal light:text-lightText darkTheme:text-darkText`} onClick={() => setMenuVisible(false)}>Accueil</Link>
            <Link href="/about" className={`${styles.navItem} navItem font-normal light:text-lightText darkTheme:text-darkText`} onClick={() => setMenuVisible(false)}>À propos</Link>
            <Link href="/projects" className={`${styles.navItem} navItem font-normal light:text-lightText darkTheme:text-darkText`} onClick={() => setMenuVisible(false)}>Projets</Link>
        </nav>
        <button className='md:hidden ml-4 border dark:border-lightBackground light:border-darkBackground dark:text-darkText light:text-lightText px-4 py-2 rounded-lg z-20' onClick={() => setMenuVisible(!menuVisible)}>Menu</button>
        <div className='flex flex-row gap-4 -z-10 items-center'>
          <LocaleSwitcherSelect/>
          <ThemeSelector customClass='size-10'/>
          {theme && (
            <button className='relative rounded-full md:mr-8 mr-4' onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>
            {theme === 'light' ? (
              <Image src='https://img.icons8.com/ios-filled/100/crescent-moon.png' alt='moon' width={40} height={40} />
            ) : (
              <Image src='https://img.icons8.com/ios/100/FFFFFF/sun--v1.png' alt='sun' width={40} height={40} />
            )}
            </button>
          )}
        </div>
    </header>
  )
}
