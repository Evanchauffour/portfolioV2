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
    <div onClick={() => router.push('/about')} className={`flex flex-col justify-center items-center h-full w-full ${styles.homePres}`}>
      <h2 className='text-8xl'>{isClient ? 'Me découvrir' : ''}</h2>
    </div>
  )
}
