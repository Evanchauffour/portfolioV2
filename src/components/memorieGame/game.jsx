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
    <div className={`relative flex flex-col w-full h-full`}>
        {!loadGame && !endGame && (
            <div className='w-full flex-1 flex-col gap-8 bg-background flex justify-center items-center'>
                <h3 className='text-2xl text-center'>{isClient ? 'Découvrez mes compétences !' : ''}</h3>
                <button className='p-3 bg-primary text-background rounded-lg text-2xl' onClick={handleStart}>Jouer</button>
            </div>
        )} 
        {loadGame && !startGame && (
            <div className='absolute w-full h-full flex-col gap-8 flex justify-center items-center z-10' style={{background: 'rgba(250,254,250,0.6)'}}>
                <h3 className='text-2xl text-text'>Préparez-vous !</h3>
                <p className='text-2xl text-text'>{timerToStartGame}s</p>
            </div>
        )}
        {loadGame && !endGame && (
            <>
            <motion.div 
                className={`${styles.grid} w-full flex-1 p-4 flex`} 
                style={{ gridTemplateColumns: `repeat(4, 1fr)`, gridTemplateRows: `repeat(4, 1fr)` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {skills.map((skill, index) => (
                    <Card key={index} id={index} skill={skill} handleClick={handleReturn}/>

                ))}
            </motion.div>
            <motion.div className='flex justify-center items-center p2'>
                {timer}s
            </motion.div>
            </>
        )}
        {endGame && (
            <div className='w-full flex-1 bg-background flex flex-col justify-center items-center gap-5'>
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <h3 className='text-center text-primary text-3xl mb-6'>Bravo !</h3>
                    <p className='text-lg text-center mb-6'>Vous avez découvert toutes mes compétences en {timer}s</p>
                    <ul className='flex flex-row mx-4 flex-wrap gap-2 justify-center self-end'>
                    {endGameSkills.map((skill, index) => (
                        <li className='border border-primary rounded-lg w-16 h-16 relative' key={index} onMouseEnter={() => setIsSkillHovered(index)} onMouseLeave={() => setIsSkillHovered(null)}>
                            <div className={`${isSkillHovered === index ? 'flex' : 'hidden'} flex-col items-center absolute left-1/2 -translate-x-1/2 -translate-y-full`}>
                                <span className='bg-primary text-background p-2 rounded-lg z-10 text-nowrap'>{skill.name}</span>
                                <div className='w-4 h-4 rotate-45 -translate-y-1/2 bg-primary'></div>
                            </div>
                            <Image src={skill.linkImg} layout='fill' alt='Logo' className='p-2'/>
                        </li>
                    ))}
                    </ul>
                </div>
                <button className='p-3 bg-primary text-background rounded-lg mb-4' onClick={handleRestart}>Rejouer</button>
            </div>
        )}
    </div>
  )
}
