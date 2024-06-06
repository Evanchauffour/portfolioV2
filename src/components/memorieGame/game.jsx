import React, { useEffect, useState } from 'react'
import styles from './game.module.scss'
import Card from './card/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from "next-themes";
import {useTranslations} from 'next-intl';

export default function Game() {

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loadGame, setLoadGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timerToStartGame, setTimerToStartGame] = useState(3);
  const [isSkillHovered, setIsSkillHovered] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true)
  }, [])

  const t = useTranslations('home.widget.game');

  const [skills, setSkills] = useState([
    {name: 'React', id: 4, linkImg:'/react.svg', status: ''},
    {name: 'Vue', id: 5, linkImg:'/vuejs.svg', status: ''},
    {name: 'Node', id: 6, linkImg:'/nodejs.svg', status: ''},
    {name: 'React native', linkImg:'/reactNative.svg', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'/cypress.svg', status: ''},
    {name: 'Tailwind', id: 11, linkImg:'/tailwind.svg', status: ''},
    {name: 'NextJs', id: 12, linkImg:'/nextjs.svg', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'/wordpress.svg', status: ''},
    {name: 'React', id: 4, linkImg:'/react.svg', status: ''},
    {name: 'Vue', id: 5, linkImg:'/vuejs.svg', status: ''},
    {name: 'Node', id: 6, linkImg:'/nodejs.svg', status: ''},
    {name: 'React native', linkImg:'/reactNative.svg', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'/cypress.svg', status: ''},
    {name: 'Tailwind', id: 11, linkImg:'/tailwind.svg', status: ''},
    {name: 'NextJs', id: 12, linkImg:'/nextjs.svg', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'/wordpress.svg', status: ''},
  ].sort(() => Math.random() - .5));

  const endGameSkills = [
    {name: 'React', id: 4, linkImg:'/react.svg', status: ''},
    {name: 'Vue', id: 5, linkImg:'/vuejs.svg', status: ''},
    {name: 'Node', id: 6, linkImg:'/nodejs.svg', status: ''},
    {name: 'React native', linkImg:'/reactNative.svg', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'/cypress.svg', status: ''},
    {name: 'Tailwind', id: 11, linkImg:'/tailwind.svg', status: ''},
    {name: 'NextJs', id: 12, linkImg:'/nextjs.svg', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'/wordpress.svg', status: ''},
  ];
  
  const handleReturn = (selectedSkillId) => {
    if(skills[selectedSkillId].status === 'active' || skills[selectedSkillId].status === 'matched') {
        return;
    } else {
        skills[selectedSkillId].status = 'active';
        setSkills([...skills]);
        setSelectedSkills([...selectedSkills, skills[selectedSkillId]]);
    }
  };
  useEffect(() => {
    if(selectedSkills.length === 2) {
        if(selectedSkills[0].name === selectedSkills[1].name) {
            skills.forEach(skill => {
                if(skill.name === selectedSkills[0].name) {
                    skill.status = 'matched';
                }
            });
            setSelectedSkills([]);
        } else {
            setTimeout(() => {
                skills.forEach(skill => {
                    if(skill.status === 'active') {
                        skill.status = '';
                    }
                });
                setSelectedSkills([]);
            }, 500)
        }
    }
    const allMatched = skills.every(skill => skill.status === 'matched');
    if (allMatched) {
        clearInterval(intervalId)
        setTimeout(() => {
            setEndGame(true);
        }, 500)
    }

  }, [intervalId, selectedSkills, skills, timer]);

  const handleStart = () => {
    setLoadGame(true);
    const intervalId = setInterval(() => {
        setTimerToStartGame((timer) => timer - 1);
      }, 1000);
    
      return () => clearInterval(intervalId);
};

useEffect(() => {
    if (timerToStartGame === 0) {
      setStartGame(true);
      const gameIntervalId = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
      setIntervalId(gameIntervalId);
    }
  }, [timerToStartGame]);



  const handleRestart = () => {
    setEndGame(false);
    setStartGame(true);
    setTimer(0);
    const intervalId = setInterval(() => {
        setTimer(timer => timer + 1);
    }, 1000);
    setIntervalId(intervalId);
    skills.forEach(skill => {
        skill.status = '';
    });
    setSkills([...skills.sort(() => Math.random() - .5)]);
  };
  

  return (
    <div className={`relative flex size-full flex-col overflow-hidden rounded-lg min-h-[400px]`}>
        {!loadGame && !endGame && (
            <div className='flex w-full flex-1 flex-col items-center justify-center sm:gap-8 gap-4'>
                <h3 className='text-center text-2xl light:text-lightText darkTheme:text-darkText'>{isClient ? t('title') : ''}</h3>
                <p className='text-center mx-5 sm:mx-20 opacity-50 text-xs sm:text-base'>{t('content')}</p>
                <button className='rounded-lg p-3 sm:text-2xl text-base light:text-lightText darkTheme:text-darkText border theme1:border-darkPrimary theme2:border-theme2-accent theme3:border-theme3-primary transition-all duration-200' onClick={handleStart}>{t('start')}</button>
            </div>
        )} 
        {loadGame && !startGame && (
            <div className='absolute z-10 flex size-full flex-col items-center justify-center gap-8' style={{background: `${theme === 'dark' ? 'rgba(1,4,3,0.6)' : 'rgba(255,255,255,0.6)'}`}}>
                <h3 className='text-2xl light:text-lightText darkTheme:text-darkText'>{t('ready')}</h3>
                <p className='text-2xl light:text-lightText darkTheme:text-darkText'>{timerToStartGame}s</p>
            </div>
        )}
        {loadGame && !endGame && (
            <>
            <motion.div 
                className={`${styles.grid} flex w-full flex-1 p-4`} 
                style={{ gridTemplateColumns: `repeat(4, 1fr)`, gridTemplateRows: `repeat(4, 1fr)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {skills.map((skill, index) => (
                    <Card key={index} id={index} skill={skill} handleClick={handleReturn}/>
                ))}
            </motion.div>
            <motion.div className='flex items-center justify-center p-2 light:text-lightText darkTheme:text-darkText'>
                {timer}s
            </motion.div>
            </>
        )}
        {endGame && (
            <div className='flex w-full flex-1 flex-col items-center justify-center gap-5'>
                <div className='flex flex-1 flex-col items-center justify-center'>
                    <h3 className='mb-6 text-center text-3xl theme1:text-darkPrimary theme2:text-theme2-accent theme3:text-theme3-primary'>{t('congratulationsTitle')}</h3>
                    <p className='mb-6 text-center text-xs sm:text-base light:text-lightText darkTheme:text-darkText'>{t('congratulationsContent', {timer: timer})}</p>
                    <ul className='mx-4 flex flex-row flex-wrap justify-center gap-2 self-end'>
                    {endGameSkills.map((skill, index) => (
                        <li className='relative size-10 sm:size-16 rounded-lg bg-white' key={index} onMouseEnter={() => setIsSkillHovered(index)} onMouseLeave={() => setIsSkillHovered(null)}>
                            <div className={`${isSkillHovered === index ? 'flex' : 'hidden'} absolute left-1/2 -translate-x-1/2 -translate-y-full flex-col items-center`}>
                                <span className='z-10 text-nowrap rounded-lg theme1:bg-darkPrimary theme2:bg-theme2-accent theme3:bg-theme3-primary p-2 
                                text-darkText'>{skill.name}</span>
                                <div className='size-4 -translate-y-1/2 rotate-45 theme1:bg-darkPrimary theme2:bg-theme2-accent theme3:bg-theme3-primary'></div>
                            </div>
                            <Image src={skill.linkImg} layout='fill' alt='Logo' className='p-2'/>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className='mb-4 sm:text-2xl p-3 text-base rounded-lg light:text-lightText darkTheme:text-darkText border theme1:border-darkPrimary theme2:border-theme2-accent theme3:border-theme3-primary' onClick={handleRestart}>{t('restart')}</button>
            </div>
        )}
    </div>
  )
}
