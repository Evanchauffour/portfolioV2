import Image from 'next/image'
import React from 'react'

export default function Icon({src, width, height}) {
  return (
    <Image src={src} width={width} height={height} className='darkTheme:invert'/>
  )
}