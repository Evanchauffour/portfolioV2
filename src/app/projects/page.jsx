'use client'

import Footer from "@/components/footer/Footer";
import Title from '@/components/title/Title'
import Link from 'next/link'
import { motion } from "framer-motion";
import styles from '@/app/projects/projects.module.scss'
import ScrollIcon from "@/components/ScrollIcon";
import projects from '@/app/projects/projects.json'
import Header from "@/components/header/Header";
import Tags from "@/components/tags/tags";

export default function Projects() {

  return (
    <>
      <Header/>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5, delay: .5 }} className='flex w-full flex-row items-center justify-center overflow-x-hidden' style={{height: 'calc(100vh - 80px)'}}>
          <Title title='Mes projets'/>
        </motion.div>
        <motion.div initial={{ display: 'none' }} animate={{ display: 'block' }} transition={{delay: .5}} className='w-full'>
          {projects.portfolio.map((project, index) => (
            <div key={index}>
              <Link 
                href={`/projects/${project.id}`} key={index}         
              >
                <motion.div 
                  className={`${styles.linkItem} lg-border-none border-b theme1:border-darkPrimary theme2:border-theme2-accent theme3:border-theme3-primary linkItem flex lg:flex-row flex-col justify-between p-5 light:text-lightText light:hover:text-lightText darkTheme:text-darkText darkTheme:hover:text-darkText`}
                  whileHover="visible"
                >
                  <h2 
                      className={`px-2 font-normal transition-all duration-300`}
                    >
                    <span style={{fontSize: '4vw'}}>{index + 1} -
                    </span>{project.name}
                  </h2>
                  <ul className="flex flex-row gap-2 self-start lg:self-end">
                    {project.technologies.map((techno, index) => (
                      <Tags technoImg={techno.img} index={index} label={techno.label} key={index}/>
                    ))}
                  </ul>
                </motion.div>
            </Link>
            </div>
            ))}
        </motion.div>
      <Footer />
    </>
  )
}

