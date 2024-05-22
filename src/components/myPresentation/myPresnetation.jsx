import React, { useEffect, useState } from 'react'
import styles from './myPresentation.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MyPresnetation() {

  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div onClick={() => router.push('/about')} className={`flex size-full cursor-pointer flex-col items-center justify-center ${styles.homePres}`}>
      <h2 className='lg:text-8xl sm:text-6xl text-5xl light:text-lightText darkTheme:text-darkText'>{isClient ? 'Me découvrir' : ''}</h2>
    </div>
  )
}
