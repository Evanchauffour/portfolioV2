'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Transition from "@/app/transition";
import desktop from '../../../../public/desktop.svg'
import mobile from '../../../../public/mobile.svg'
import projects from '@/app/projects/projects.json'
import styles from '../[slug]/projet.module.scss'
import Link from "next/link";
import Header from "@/components/header/Header";
import Tags from "@/components/tags/tags";

export default function Project( {params} ) {
  const [project, setProject] = useState();
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    window.scrollTo(0, 0);
    const project = projects.portfolio.find((project) => project.id === params.slug);
    setProject(project);
  }, [params.slug]);

  return (
    <>
      {/* <Transition /> */}
      <Header />
      {project && project.images && (
        <>
          <div className="w-full flex-1 overflow-y-auto p-6 flex flex-col xl:flex-row justify-between gap-10 xl:gap-20">
            <div className="xl:w-1/2 flex flex-col gap-5 xl:self-end flex-start border-b border-primary xl:border-0 pb-10 xl:pb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .5}}
                className={`font-extrabold text-9xl ${styles.projectName}`}
              >
                {project.name}
              </motion.h1>
              <ul className="flex flex-row gap-2">
                {project.technologies.map((techno, index) => (
                    <Tags technoImg={techno} index={index} label="Wordpress" key={index}/>
                  ))}
                </ul>
              <motion.p 
                className="text-justify sm:w-3/4 xl:w-full text-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .7}}
              >
                {project.description}
              </motion.p>
              <motion.a                 
                className={`p-3 rounded-lg relative z-10 bg-primary text-background shrink-0 w-fit`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
              >
              Visiter le site
              </motion.a>
            </div>
            <div className="flex xl:flex-col flex-col-reverse items-center gap-5 justify-center self-center xl:self-end h-2/6 xl:w-1/2 w-full">
              <div className="relative flex justify-center items-center">
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
                    <Image src={project.images.desktop[0]} alt="project" className="w-full h-full" layout="fill" objectFit="cover"/>
                  </motion.div>
                  ) : (
                  <motion.div 
                    key="mobile"
                    className="absolute left-1/2 -translate-x-1/2 overflow-hidden" 
                    style={{width:'70%', height:'94%', top:'3%', borderRadius:"30px"}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {/* <Image src={productLight} alt="project" className="w-full h-full" layout="fill" objectFit="cover"/> */}
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
                  <button className={`p-3 rounded-lg relative z-10 ${device === 'desktop' ? 'bg-primary text-background' : 'text-black'}`} onClick={() => setDevice('desktop')}>Desktop</button>
                  <button className={`p-3 rounded-lg relative z-10 ${device === 'mobile' ? 'bg-primary text-background' : 'text-black'}`} onClick={() => setDevice('mobile')}>Mobile</button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
