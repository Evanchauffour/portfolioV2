'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"
import styles from './projet.module.scss'
import Header from "@/components/header/Header";
import Tags from "@/components/tags/tags";
import { useTheme } from "next-themes";
import { useRouter } from 'next/navigation'

export default function Project( {project, projects} ) {
  const [device, setDevice] = useState(null);
  const [nextProjectId, setNextProjectId] = useState(0);
  const [previousProjectId, setPreviousProjectId] = useState(0);
  const { theme } = useTheme();
  const router = useRouter()
  const nextButton = useRef(null);
  const previousButton = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setNextProjectId(parseInt(project.id));
    setPreviousProjectId(parseInt(project.id));
    if(!project.images.desktop) {
      setDevice('mobile');
    } else {
      setDevice('desktop');
    }
  }, []);

  const handleKeyup = (event) => {
    if (event.key === 's') {
      changeProject(true, false);
      if(localStorage.getItem('themeColor') === '0') {
        nextButton.current.classList.remove('bg-darkPrimary');
      } else if(localStorage.getItem('themeColor') === '1') {
        nextButton.current.classList.remove('bg-theme2-primary');
      } else if(localStorage.getItem('themeColor') === '2') {
        nextButton.current.classList.remove('bg-theme3-primary');
      }
    }
    if (event.key === 'p') {
      changeProject(false, true);
      if(localStorage.getItem('themeColor') === '0') {
        previousButton.current.classList.remove('bg-darkPrimary');
      } else if(localStorage.getItem('themeColor') === '1') {
        previousButton.current.classList.remove('bg-theme2-primary');
      } else if(localStorage.getItem('themeColor') === '2') {
        previousButton.current.classList.remove('bg-theme3-primary');
      }
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 's') {
      if(localStorage.getItem('themeColor') === '0') {
        nextButton.current.classList.add('bg-darkPrimary');
      } else if(localStorage.getItem('themeColor') === '1') {
        nextButton.current.classList.add('bg-theme2-primary');
      } else if(localStorage.getItem('themeColor') === '2') {
        nextButton.current.classList.add('bg-theme3-primary');
      }
    }
    if (event.key === 'p') {
      if(localStorage.getItem('themeColor') === '0') {
        previousButton.current.classList.add('bg-darkPrimary');
      } else if(localStorage.getItem('themeColor') === '1') {
        previousButton.current.classList.add('bg-theme2-primary');
      } else if(localStorage.getItem('themeColor') === '2') {
        previousButton.current.classList.add('bg-theme3-primary');
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('keydown', handleKeyup);
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

const changeProject = (next = false, previous = false) => {
  if(next) {
    setNextProjectId(prevId => {
      if(prevId + 1 > projects.portfolio.length) {
        var newId = 1;
      } else {
        var newId = prevId + 1;
      }
      router.push(`/projects/${newId}`);
    });
  } else if(previous) {
    setPreviousProjectId(prevId => {
      if(prevId - 1 === 0) {
        var newId = projects.portfolio.length;
      } else {
        var newId = prevId - 1;
      }
      router.push(`/projects/${newId}`);
    });
  }
}

const deviceAnim = {
  open: { opacity: 1, 
    transition: {
      duration: .3
    },
  },
}  

  return (
    <>
      <Header />
      {device && (
        <div className="my-20">
            <div className="xl:mx-32 sm:mx-10 mx-5 flex flex-1 flex-col items-center">
              <div className="flex items-center gap-5 mb-5">
                <motion.button               
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .5, delay: 1}} 
                  className="sm:p-4 p-3 rounded-lg dark:text-darkText light:text-lightText dark:border-lightBackground underline sm:text-base text-sm" 
                  onClick={() => changeProject(false, true)}>
                  <span ref={previousButton} className="md:inline hidden text-bold py-2 px-3 mr-3 rounded-lg underline light:border-darkBackground dark:border-lightBackground border dark:text-darkText light:text-lightText">P</span>Projet précédent
                </motion.button>
                <motion.button                   
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: .5, delay: 1.1}} 
                  className="sm:p-4 p-3 rounded-lg dark:text-darkText light:text-lightText dark:border-lightBackground light:border-darkBackground underline sm:text-base text-sm" 
                  onClick={() => changeProject(true, false)}> 
                  <span ref={nextButton} className="md:inline hidden text-bold py-2 px-3 mr-3 rounded-lg underline light:border-darkBackground dark:border-lightBackground border dark:text-darkText light:text-lightText">S</span>Projet suivant
                  </motion.button>
              </div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .5}}
                className={`xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-nowrap font-extrabold  bg-gradient-to-r from-darkPrimary to-darkAccent bg-clip-text text-transparent theme2:from-theme2-primary theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent ${styles.projectName}`}
              >
                {project.name}
              </motion.h1>
              <ul className="mb-5 mt-2 flex flex-row gap-4">
                {project.technologies.map((techno, index) => (
                    <Tags technoImg={techno.img} index={index} label={techno.label} key={index}/>
                ))}
              </ul>
              <motion.p 
                className="mb-5 w-full 2xl:w-3/4 text-sm xl:text-base text-justify font-normal light:text-lightText darkTheme:text-darkText"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: .7}}
              >
                {project.description}
              </motion.p>
              <div className="flex flex-row items-center gap-5">
                {project.website_link && (
                <motion.a                 
                  className={`relative flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border p-3 transition-all duration-100 hover:gap-4 hover:border-darkPrimary light:border-darkBackground light:text-lightText darkTheme:border-lightBackground darkTheme:text-darkText`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                  Visiter le site
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${theme === 'dark' ? 'white' : 'black'}`} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </motion.a>
                )}
                {project.github_link && (
                <motion.a                 
                  className={`relative flex w-fit shrink-0 cursor-pointer flex-row items-center gap-2 rounded-lg border p-3 transition-all duration-100 hover:gap-4 hover:border-darkPrimary light:border-darkBackground light:text-lightText darkTheme:border-lightBackground darkTheme:text-darkText`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: .5, delay: .9}} href={project.website_link} target="_blank" rel="noopener noreferrer"
                >
                Github
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </motion.a>
                )}
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
                    project.images.desktop && (
                      <button className={`relative rounded-lg p-3 ${device === 'desktop' ? 'bg-gradient-to-r from-darkSecondary to-darkPrimary p-3 theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent text-darkText' : 'light:text-lightText darkTheme:text-darkText'}`} onClick={() => setDevice('desktop')}>Desktop</button>
                    )
                  }
                  {
                    project.images.mobile && (
                      <button className={`relative rounded-lg p-3 ${device === 'mobile' ? 'bg-gradient-to-r from-darkSecondary to-darkPrimary theme2:to-theme2-accent theme3:from-theme3-primary theme3:to-theme3-accent p-3 text-darkText' : 'light:text-lightText darkTheme:text-darkText'}`} onClick={() => setDevice('mobile')}>Mobile</button>
                    )
                  }                
                  </div>
              </motion.div>
              <div className="w-full">
                <motion.div 
                  className="relative mb-10 flex w-full flex-row items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5, delay: 1 }}
                >
                  {device === 'desktop' ? (
                  <motion.div          
                    key="desktop"           
                    variants={deviceAnim}
                    initial={{ opacity: 0 }}
                    animate={'open'}
                    transition={{ duration: .2 }}
                    className="relative w-[350px] sm:w-[750px] lg:w-[900px] xl:w-[1000px] overflow-hidden" 
                    style={{border: 'solid 2px grey', borderRadius: '20px'}}
                  >
                    <div className="size-full overflow-hidden relative" style={{border: 'solid 5px black', borderRadius: '18px'}}>
                      {/* <Image 
                      src={project.images.desktop[0]}
                      alt="projectImageDesktop"      
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      priority
                      width={1000}
                      height={600}
                      /> */}
                      <video src={project.images.desktop[0]} autoPlay loop muted playsinline controls="w-full h-auto"></video>
                    </div>
                  </motion.div>
                  ) : (
                  <motion.div          
                    key="mobile"           
                    variants={deviceAnim}
                    initial={{ opacity: 0 }}
                    animate={'open'}
                    transition={{ duration: .2 }}
                    className="relative w-[250px] md:w-[300px] overflow-hidden" 
                    style={{border: 'solid 4px grey', borderRadius: '48px'}}
                  >
                    <div className="size-full overflow-hidden relative" style={{border: 'solid 8px black', borderRadius: '40px'}}>
                      {/* <Image 
                      src={project.images.mobile[0]} 
                      alt="project" 
                      priority
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      width={280}
                      height={600}
                      /> */}
                      <video src={project.images.mobile[0]} autoPlay loop muted playsinline controls className="w-full h-auto"></video>
                    </div>
                  </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
      )}
    </>
  );
}
