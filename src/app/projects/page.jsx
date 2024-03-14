'use client'

import Footer from "@/components/footer/Footer";
import Title from '@/components/title/Title'
import Link from 'next/link'
import { useRef } from 'react';
import Transition from "../transition";
import { motion } from "framer-motion";
import styles from '@/app/projects/projects.module.scss'
import Image from "next/image";
import ScrollIcon from "@/components/ScrollIcon";
import projects from '@/app/projects/projects.json'
import Header from "@/components/header/Header";
import Tags from "@/components/tags/tags";

export default function Projects() {

  return (
    <>
      <Header color='secondary'/>
      <Transition>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }} className='w-full flex flex-row items-center justify-center overflow-x-hidden' style={{height: 'calc(100vh - 80px)'}}>
          <Title title='Mes projets' color='primary'/>
          <ScrollIcon />
        </motion.div>
        <motion.div initial={{ display: 'none' }} animate={{ display: 'block' }} transition={{delay: .5}} className='w-full'>
          {projects.portfolio.map((project, index) => (
            <div key={index}>
              <Link 
                href={`/projects/${project.id}`} key={index}         
              >
                <motion.div 
                  className={`${styles.linkItem} flex flex-col items-start justify-between p-5`}
                  whileHover="visible"
                >
                  <h2 
                      className={`transition-all duration-300 font-normal px-2`}
                      style={{fontSize: '6vw'}}
                    >
                    <span style={{fontSize: '4vw'}}>{index + 1} -
                    </span>{project.name}
                  </h2>
                  {/* <ul className="flex flex-row gap-2">
                    {project.technologies.map((techno, index) => (
                      <Tags technoImg={techno} index={index} label="Wordpress" key={index}/>
                    ))}
                  </ul> */}
                </motion.div>
            </Link>
            </div>
            ))}
        </motion.div>
      </Transition>
      <Footer />
    </>
  )
}

