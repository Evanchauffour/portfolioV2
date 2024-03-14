import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import projects from '@/app/projects/projects.json'
import Image from "next/image";
import styles from './sliderProject.module.scss'
import desktop from '/public/desktop.svg'
import Tags from '../tags/tags';

export default function SliderProjectsHome() {
  return (
    <>
        <Link href="/projects" className={`flex-1 flex justify-center items-center w-full relative ${styles.projectHome}`}>
            <h2 className='text-8xl'>Mes projets</h2>
        </Link>
    </>
  )
}
