'use client'

import Footer from "@/components/footer/Footer";
import Title from '@/components/title/Title'
import Image from 'next/image'
import pp from '../../../public/pp.JPG'
import ScrollIcon from "@/components/ScrollIcon";
import Header from "@/components/header/Header";
import { motion } from 'framer-motion';


export default function About() {

  return (
    <>
      <Header color='secondary'/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }} className='flex w-full md:mt-28 mt-12 flex-row items-center justify-center overflow-hidden'>
          <Title title='À propos' color='secondary'/>
        </motion.div>
        <div className='flex my-10 flex-row items-center justify-center'>
          <div className='relative flex h-full flex-col lg:flex-row'>
            <div className='lg:size-[500px] h-80 w-full rounded-lg translate-x-0 lg:translate-x-12 hidden lg:flex'>
              <Image 
                src={pp} alt='Ma photo'
                className='size-full object-cover'
              />
            </div>
            <div className='block sm:w-[500px] w-fulltranslate-x-0 lg:-translate-x-12 self-center bg-gradient-to-r theme1:from-darkSecondary theme1:to-darkPrimary theme3:from-theme3-primary theme3:to-theme3-accent theme2:from-theme2-primary theme2:to-theme2-accent p-1'>
              <div className="p-7 light:bg-lightBackground darkTheme:bg-darkBackground">
                <h2 className='mb-5 text-2xl light:text-lightText darkTheme:text-lightBackground'>Hey ! <br/>Je suis Evan Chauffour<br/>un développeur web de 21 ans</h2>
                <p className='font-sora font-thin leading-5 light:text-lightText darkTheme:text-lightBackground'>Je suis passionné de développement web depuis maintenant deux ans. Mon parcours professionnel m'a conduit à me spécialiser principalement dans le front-end, où j'ai développé une forte compétence dans la création d'interfaces utilisateur attrayantes et fonctionnelles. Cependant, mes projets m'ont également amené à explorer activement le domaine du back-end. En plus du développement web, je suis passionné de sport, en particulier du basket-ball et de cinéma. Cela occupe une grande partie de mon temps en dehors du développement web. Actuellement, je suis en alternance chez <a href='https://www.weprode.com/' target='blank_' className='underline'>WeProde</a></p>
              </div>
            </div>
          </div>
        </div>
      <Footer />
  </>
  )
}
