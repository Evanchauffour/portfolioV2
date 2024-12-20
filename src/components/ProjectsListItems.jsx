'use client'

import React, { useEffect, useState } from 'react'
import styles from '../app/[locale]/projects/projects.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Tags from './tags/tags'

export default function ProjectsListItems({project, index}) {

  const [isHovering, setIshovering] = useState(false)

  const themeColor = [
    {
      color: 'from-darkPrimary to-lightAccent',
      theme: 'theme1'
    },
    {
      color: 'from-red-500 to-lightAccent',
      theme: 'theme2'
    },
    {
      color: 'from-theme3-primary to-theme3-accent',
      theme: 'theme3'
    }
  ];

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.getItem('themeColor')
      document.documentElement.classList.remove('theme1', 'theme2', 'theme3');
      document.documentElement.classList.add(themeColor[localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : 0].theme); 
    }
  }, []);

  return (
    <div onMouseEnter={() => setIshovering(true)} onMouseLeave={() => setIshovering(false)}>
    <Link 
      href={`/projects/${project.id}`} key={index}         
    >
      <motion.div 
        className={`${styles.linkItem} mb-5 rounded-lg flex lg:flex-row flex-col justify-between p-4 md:p-5 light:text-lightText light:hover:text-lightText darkTheme:text-darkText darkTheme:hover:text-darkText light:bg-lightBackground transition-shadow duration-500 ease-in-out darkTheme:bg-darkBackground shadow-md md:shadow-none md:hover:shadow-lg darkTheme:shadow-black light:shadow-text-neutral-700`}
        whileHover="visible"
      >
        <h2 
            className={`font-normal transition-all duration-300`}
          >
          <span style={{fontSize: '4vw'}}>{index + 1} -
          </span>{project.name}
        </h2>
        {isHovering && (
        <ul className="md:flex flex-row gap-2 self-start lg:self-end hidden">
          {project.technologies.map((techno, index) => (
            <Tags technoImg={techno.img} index={index} label={techno.label} key={index} animationDelay={0.2}/>
          ))}
        </ul>
        )}
        <ul className="md:hidden flex-row flex-wrap gap-2 self-start lg:self-end flex">
          {project.technologies.map((techno, index) => (
            <Tags technoImg={techno.img} index={index} label={techno.label} key={index} animationDelay={0.2}/>
          ))}
        </ul>
        </motion.div>
      </Link>
      </div>
  )
}

