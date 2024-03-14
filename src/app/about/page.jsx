'use client'

import Footer from "@/components/footer/Footer";
import Title from '@/components/title/Title'
import Image from 'next/image'
import pp from '../../../public/pp.JPG'
import ScrollIcon from "@/components/ScrollIcon";
import Header from "@/components/header/Header";
import TransitionAbout from "../transitionAbout";
import { motion } from 'framer-motion';


export default function About() {

  return (
    <>
      <Header color='primary'/>
      <TransitionAbout>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }} className='w-full flex flex-row items-center justify-center overflow-hidden bg-primary' style={{height: 'calc(100vh - 80px)'}}>
          <Title title='À propos' color='secondary'/>
          <ScrollIcon />
        </motion.div>
        <div className='flex flex-row items-center justify-center min-h-screen bg-primary'>
          <div className='flex relative h-full'>
            <div className='w-[500px] h-[500px] translate-x-12'>
              <Image 
                src={pp} alt='Ma photo'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-1 block self-center w-[500px] -translate-x-12 bg-gradient-to-r from-primary  to-secondary'>
              <div className="bg-background p-7">
                <h2 className='mb-5 text-2xl text-primary'>Hey ! <br/>Je suis Evan Chauffour<br/>un développeur web de 20 ans</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className='leading-5 font-sora'>Je suis passionné de développement web depuis maintenant deux ans. Mon parcours professionnel m'a conduit à me spécialiser principalement dans le front-end, où j'ai développé une forte compétence dans la création d'interfaces utilisateur attrayantes et fonctionnelles. Cependant, mes projets m'ont également amené à explorer activement le domaine du back-end. En plus du développement web, je suis passionné de sport, en particulier du basket-ball et de cinéma. Cela occupe une grande partie de mon temps en dehors du développement web. Actuellement, je suis en alternance chez <a href='https://www.weprode.com/' target='blank_' className='underline'>WeProde</a></p>
              </div>
            </div>
          </div>
        </div>
      </TransitionAbout>
      <Footer />
  </>
  )
}
