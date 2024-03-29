import React, { useEffect, useState } from 'react'
import styles from '@/components/memorieGame/game.module.scss'
import Card from './card/card'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Game() {

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loadGame, setLoadGame] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [timerToStartGame, setTimerToStartGame] = useState(3);
  const [isSkillHovered, setIsSkillHovered] = useState(null);

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [skills, setSkills] = useState([
    {name: 'React', id: 4, linkImg:'https://img.icons8.com/office/80/react.png', status: ''},
    {name: 'Vue', id: 5, linkImg:'https://img.icons8.com/color/96/vue-js.png', status: ''},
    {name: 'Node', id: 6, linkImg:'https://img.icons8.com/color/96/nodejs.png', status: ''},
    {name: 'React native', linkImg:'https://img.icons8.com/color/96/react-native.png', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'https://asset.brandfetch.io/idIq_kF0rb/idZxkJkFIi.svg', status: ''},
    {name: 'MongoDB', id: 11, linkImg:'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png', status: ''},
    {name: 'NextJs', id: 12, linkImg:'https://img.icons8.com/color/96/nextjs.png', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'https://img.icons8.com/color/96/wordpress.png', status: ''},
    {name: 'React', id: 4, linkImg:'https://img.icons8.com/office/80/react.png', status: ''},
    {name: 'Vue', id: 5, linkImg:'https://img.icons8.com/color/96/vue-js.png', status: ''},
    {name: 'Node', id: 6, linkImg:'https://img.icons8.com/color/96/nodejs.png', status: ''},
    {name: 'React native', linkImg:'https://img.icons8.com/color/96/react-native.png', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'https://asset.brandfetch.io/idIq_kF0rb/idZxkJkFIi.svg', status: ''},
    {name: 'MongoDB', id: 11, linkImg:'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png', status: ''},
    {name: 'NextJs', id: 12, linkImg:'https://img.icons8.com/color/96/nextjs.png', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'https://img.icons8.com/color/96/wordpress.png', status: ''},
  ].sort(() => Math.random() - .5));

  const [endGameSkills, setEndGameSkills] = useState([
    {name: 'React', id: 4, linkImg:'https://img.icons8.com/office/80/react.png', status: ''},
    {name: 'Vue', id: 5, linkImg:'https://img.icons8.com/color/96/vue-js.png', status: ''},
    {name: 'Node', id: 6, linkImg:'https://img.icons8.com/color/96/nodejs.png', status: ''},
    {name: 'React native', linkImg:'https://img.icons8.com/color/96/react-native.png', id: 9, status: ''},
    {name: 'Cypress', id: 10, linkImg:'https://asset.brandfetch.io/idIq_kF0rb/idZxkJkFIi.svg', status: ''},
    {name: 'MongoDB', id: 11, linkImg:'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png', status: ''},
    {name: 'NextJs', id: 12, linkImg:'https://img.icons8.com/color/96/nextjs.png', status: ''},
    {name: 'Wordpress', id: 13, linkImg:'https://img.icons8.com/color/96/wordpress.png', status: ''}
  ]);
  
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
    <div className={`relative flex size-full flex-col`}>
        {!loadGame && !endGame && (
            <div className='flex w-full flex-1 flex-col items-center justify-center gap-8 bg-background'>
                <h3 className='text-center text-2xl text-text'>{isClient ? 'Découvrez mes compétences !' : ''}</h3>
                <button className='rounded-lg bg-primary p-3 text-2xl text-background' onClick={handleStart}>Jouer</button>
            </div>
        )} 
        {loadGame && !startGame && (
            <div className='absolute z-10 flex size-full flex-col items-center justify-center gap-8' style={{background: 'rgba(1,4,3,0.6)'}}>
                <h3 className='text-2xl text-text'>Préparez-vous !</h3>
                <p className='text-2xl text-text'>{timerToStartGame}s</p>
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
            <motion.div className='flex items-center justify-center p-2 text-text'>
                {timer}s
            </motion.div>
            </>
        )}
        {endGame && (
            <div className='flex w-full flex-1 flex-col items-center justify-center gap-5 bg-background'>
                <div className='flex flex-1 flex-col items-center justify-center'>
                    <h3 className='mb-6 text-center text-3xl text-primary'>Bravo !</h3>
                    <p className='mb-6 text-center text-lg'>Vous avez découvert toutes mes compétences en {timer}s</p>
                    <ul className='mx-4 flex flex-row flex-wrap justify-center gap-2 self-end'>
                    {endGameSkills.map((skill, index) => (
                        <li className='relative size-16 rounded-lg bg-white' key={index} onMouseEnter={() => setIsSkillHovered(index)} onMouseLeave={() => setIsSkillHovered(null)}>
                            <div className={`${isSkillHovered === index ? 'flex' : 'hidden'} absolute left-1/2 -translate-x-1/2 -translate-y-full flex-col items-center`}>
                                <span className='z-10 text-nowrap rounded-lg bg-primary p-2 text-background'>{skill.name}</span>
                                <div className='size-4 -translate-y-1/2 rotate-45 bg-primary'></div>
                            </div>
                            <Image src={skill.linkImg} layout='fill' alt='Logo' className='p-2'/>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className='mb-4 rounded-lg bg-primary p-3 text-background' onClick={handleRestart}>Rejouer</button>
            </div>
        )}
    </div>
  )
}
