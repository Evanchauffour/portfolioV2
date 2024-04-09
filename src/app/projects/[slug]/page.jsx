'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import desktop from '../../../../public/desktop.svg'
import mobile from '../../../../public/mobile.svg'
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
          <div className="flex w-full flex-1 flex-col justify-between gap-10 overflow-y-auto p-6 xl:flex-row xl:gap-20">
            <div className="flex flex-col gap-5 border-b border-primary pb-10 xl:w-1/2 xl:self-end xl:border-0 xl:pb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .5}}
                className={`text-9xl font-extrabold ${styles.projectName}`}
              >
                {project.name}
              </motion.h1>
              <ul className="flex flex-row gap-4">
                {project.technologies.map((techno, index) => (
                    <Tags technoImg={techno.img} index={index} label={techno.label} key={index}/>
                  ))}
                </ul>
              <motion.p 
                className="text-justify font-thin text-text sm:w-3/4 xl:w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .7}}
              >
                {project.description}
              </motion.p>
              {project.website_link && (
              <motion.a                 
                className={`relative z-10 w-fit shrink-0 rounded-lg bg-gradient-to-r from-secondary to-primary p-3 text-text`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
              >
              Visiter le site
              </motion.a>
              )}
            </div>
            <div className="flex h-2/6 w-full flex-col-reverse items-center justify-center gap-5 self-center xl:w-1/2 xl:flex-col xl:self-end">
              <div className="relative flex items-center justify-center">
                <motion.div 
                  key={device}
                  className="relative mb-10 w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}
                >
                  <Image src={device === 'desktop' ? desktop : mobile} alt="device" width={device === 'desktop' ? '' : 350} style={{maxHeight:'600px'}}/>
                  {device === 'desktop' ? (
                  <motion.div 
                    key="desktop"
                    className="absolute left-1/2 -translate-x-1/2" 
                    style={{width:'80%', height:'85%', top:'5%'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Image src={project.images.desktop[0]} alt="project" className="size-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  ) : (
                  <motion.div 
                    key="mobile"
                    className="absolute left-1/2 -translate-x-1/2 overflow-hidden" 
                    style={{width:'70%', height:'94%', top:'3%', borderRadius:"30px"}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Image src={project.images.mobile[0]} alt="project" className="size-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  )}
                </motion.div>
              </div>
              <motion.div 
                className="relative flex flex-row items-center gap-8 rounded-lg"
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
