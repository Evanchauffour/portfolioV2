'use client'

import { React } from 'react';
import Footer from "@/components/footer/Footer";
import styles from './home.module.scss'
import 'swiper/swiper-bundle.css';
import SliderProjectsHome from '@/components/sliderProjectsHome/sliderProjectsHome';
import MyPresnetation from '@/components/myPresentation/myPresnetation';
import Game from '@/components/memorieGame/game';
import Header from '@/components/header/Header';


export default function Home() {

  return (
    <>
      <div className={`w-full ${styles.homeContainer}`} style={{minHeight: '100vh'}}>
        <div className={`bg-background relative border-r-2 border-accent ${styles.widget}`} style={{gridArea: 'me'}}>
          <MyPresnetation />
        </div>
        <div className={`bg-background flex flex-col items-center ${styles.widget}`} style={{gridArea: 'projects'}}>
          <SliderProjectsHome />
        </div>
        <div className={`bg-background flex flex-col justify-center items-center gap-10 ${styles.widget}`} style={{gridArea: 'game'}}>
          <Game />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
