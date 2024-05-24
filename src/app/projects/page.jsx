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
  {projects && projects.portfolio.length > 0 && (
    <>
      <Header />
      <motion.div className='flex w-full md:mt-28 my-8 flex-row items-center justify-center overflow-hidden'>
        <Title title='Mes projets' />
      </motion.div>
      <motion.div className='mx-4'>
        {projects.portfolio.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
            <ProjectsListItems project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </>
  )}
</>

  )
}

