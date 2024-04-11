'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import desktop from '../../../../public/desktop.png'
import mobile from '../../../../public/mobile.svg'
import arrowRight from '../../../../public/arrowRight.png'
import projects from '@/app/projects/projects.json'
import styles from '../[slug]/projet.module.scss'
import Header from "@/components/header/Header";
import Tags from "@/components/tags/tags";

export default function Project( {params} ) {
  const [project, setProject] = useState();
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    window.scrollTo(0, 0);
    const project = projects.portfolio.find((project) => project.id === params.slug);
    setProject(project);

    if(project.images.desktop.length === 0) {
      setDevice('mobile');
    }
  }, [params.slug]);

  return (
    <>
      {/* <Transition /> */}
      <Header />
      {project && project.images && (
        <>
          <div className="my-20">
            <div className="mx-32 flex flex-1 flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .5}}
                className={`text-9xl font-extrabold ${styles.projectName}`}
              >
                {project.name}
              </motion.h1>
              <ul className="mb-5 mt-2 flex flex-row gap-4">
                {project.technologies.map((techno, index) => (
                    <Tags technoImg={techno.img} index={index} label={techno.label} key={index}/>
                ))}
              </ul>
              <motion.p 
                className="mb-5 w-3/4 text-justify font-normal light:text-lightText dark:text-darkText"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .7}}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-row items-center gap-5">
                {project.website_link && (
                <motion.a                 
                  className={`relative z-10 flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border p-3 transition-all duration-100 hover:gap-4 hover:border-darkPrimary light:border-darkBackground light:text-lightText dark:border-lightBackground dark:text-darkText`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                  Visiter le site
                  <Image src={arrowRight} width={20} height={20} alt="arrow right"/>
                </motion.a>
                )}
                <motion.a                 
                  className={`relative z-10 flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border p-3 transition-all duration-100 hover:gap-4 hover:border-darkPrimary light:border-darkBackground light:text-lightText dark:border-lightBackground dark:text-darkText`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                Github
                <Image src={arrowRight} width={20} height={20} alt="arrow right"/>
                </motion.a>
              </div>
            </div>
            <div className="mt-5 flex flex-1 flex-col items-center">
              <motion.div 
                className="relative mb-5 mt-10 flex flex-row items-center gap-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .9}}
              >
                <div className="relative">
                  {
                    project.images.desktop.length > 0 && (
                      <button className={`relative z-10 rounded-lg p-3 ${device === 'desktop' ? 'bg-gradient-to-r from-darkSecondary to-darkPrimary p-3 text-darkText' : 'light:text-lightText dark:text-darkText'}`} onClick={() => setDevice('desktop')}>Desktop</button>
                    )
                  }
                  {
                    project.images.mobile.length > 0 && (
                      <button className={`relative z-10 rounded-lg p-3 ${device === 'mobile' ? 'bg-gradient-to-r from-darkSecondary to-darkPrimary p-3 text-darkText' : 'light:text-lightText dark:text-darkText'}`} onClick={() => setDevice('mobile')}>Mobile</button>
                    )
                  }                
                  </div>
              </motion.div>
              <div className="w-full">
                <motion.div 
                  key={device}
                  className="relative mb-10 flex w-full flex-row items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}
                >
                  {device === 'desktop' ? (
                  <div className="relative h-[616px] w-[1000px] overflow-hidden" style={{border: 'solid 8px grey', borderRadius: '48px'}}>
                    <div className="size-full overflow-hidden" style={{border: 'solid 16px black', borderRadius: '40px'}}>
                      <Image src={project.images.desktop[0]} alt="projectImageDesktop" width={1000} height={616} className="-z-10"/>
                    </div>
                  </div>
                  ) : (
                  <>
                  <Image src={mobile} alt="device" className='w-1/5'/>
                  <motion.div 
                    key="mobile"
                    className="absolute left-1/2 -z-10 -translate-x-1/2 overflow-hidden" 
                    style={{width:'18%', height:'95%', top:'2%', borderRadius:"30px"}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Image src={project.images.mobile[0]} alt="project" className="size-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
