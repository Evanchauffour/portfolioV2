'use client'

import Footer from "@/components/footer/Footer";
import Title from '@/components/title/Title'
import Link from 'next/link'
import { motion } from "framer-motion";
import projects from '@/app/projects/projects.json'
import Header from "@/components/header/Header";
import ProjectsListItems from "@/components/ProjectsListItems";

export default function Projects() {

  return (
    <>
      <Header/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }} className='flex w-full md:mt-28 my-8 flex-row items-center justify-center overflow-hidden'>
          <Title title='Mes projets'/>
        </motion.div>
        <motion.div initial={{ display: 'none' }} animate={{ display: 'block' }} transition={{delay: .5}} className='mx-4'>
          {projects.portfolio.map((project, index) => (
            <ProjectsListItems project={project} index={index} key={index}/>
          ))}
        </motion.div>
      <Footer />
    </>
  )
}

