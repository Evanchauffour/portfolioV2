import React, { useEffect, useState } from 'react'
import styles from './myPresentation.module.scss'
import { useRouter } from 'next/navigation'
import {useTranslations} from 'next-intl';

export default function MyPresentation() {

  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const t = useTranslations('home.widget.about');

  return (
    <div onClick={() => router.push('/about')} className={`flex size-full cursor-pointer flex-col items-center justify-center ${styles.homePres}`} role='buttton'>
      <h2 className='mx-10 text-5xl light:text-lightText darkTheme:text-darkText sm:text-6xl lg:text-8xl'>{isClient ? t('title') : ''}</h2>
      <p className='mx-20 mt-5 text-center text-xs opacity-50 sm:mx-40 sm:text-base'>{t('content')}</p>
    </div>
  )
}
