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
          <div className="mx-40 my-20 flex flex-1 flex-col items-center overflow-y-auto">
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
                className="mb-5 w-3/4 text-justify font-normal text-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .7}}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-row items-center gap-5">
                {project.website_link && (
                <motion.a                 
                  className={`relative z-10 flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border border-text p-3 text-text transition-all duration-100 hover:gap-4 hover:border-primary`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                  Visiter le site
                  <Image src={arrowRight} width={20} height={20} alt="arrow right"/>
                </motion.a>
                )}
                <motion.a                 
                  className={`relative z-10 flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border border-text p-3 text-text transition-all duration-100 hover:gap-4 hover:border-primary`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                Github
                <Image src={arrowRight} width={20} height={20} alt="arrow right"/>
                </motion.a>
              </div>
              <motion.div 
                className="relative mb-5 mt-20 flex flex-row items-center gap-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .9}}
              >
                <div className="relative">
                  {
                    project.images.desktop.length > 0 && (
                      <button className={`relative z-10 rounded-lg p-3 ${device === 'desktop' ? 'bg-gradient-to-r from-secondary to-primary p-3 text-text' : 'text-text'}`} onClick={() => setDevice('desktop')}>Desktop</button>
                    )
                  }
                  {
                    project.images.mobile.length > 0 && (
                      <button className={`relative z-10 rounded-lg p-3 ${device === 'mobile' ? 'bg-gradient-to-r from-secondary to-primary p-3 text-text' : 'text-text'}`} onClick={() => setDevice('mobile')}>Mobile</button>
                    )
                  }                
                  </div>
              </motion.div>
              <div className="flex h-2/6 w-full flex-col items-center justify-center gap-5 self-center">
                <motion.div 
                  key={device}
                  className="relative mb-10 flex w-full flex-row items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <Image src={device === 'desktop' ? desktop : mobile} alt="device" className={`${device === 'desktop' ? 'w-full' : 'w-1/3'}`}/>
                  {device === 'desktop' ? (
                  <motion.div 
                    key="desktop"
                    className="absolute left-1/2 -z-10 -translate-x-1/2" 
                    style={{width:'80%', height:'85%', top:'5%'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Image src={project.images.desktop[0]} alt="project" className="size-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  ) : (
                  <motion.div 
                    key="mobile"
                    className="absolute left-1/2 -z-10 -translate-x-1/2 overflow-hidden" 
                    style={{width:'30%', height:'95%', top:'3%', borderRadius:"30px"}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Image src={project.images.mobile[0]} alt="project" className="size-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  )}
                </motion.div>
              </div>
          </div>
        </>
      )}
    </>
  );
}
