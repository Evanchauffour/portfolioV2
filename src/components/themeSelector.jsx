'use client'

import { React, useState } from 'react';

export default function ThemeSelector({ customClass }) {
 
  const [themeColorSelected, setThemeColorSelected] = useState(parseInt(localStorage.getItem('themeColor')) || 0);

  const themeColor = [
    {
      color: 'from-darkPrimary to-lightAccent',
      theme: 'theme1'
    },
    {
      color: 'from-theme2-primary to-theme2-accent',
      theme: 'theme2'
    },
    {
      color: 'from-theme3-primary to-theme3-accent',
      theme: 'theme3'
    }
  ]

  const handleTheme = () => {
    const newThemeColorSelected = themeColorSelected < themeColor.length - 1 ? themeColorSelected + 1 : 0;
    setThemeColorSelected(newThemeColorSelected);
    localStorage.setItem('themeColor', newThemeColorSelected);   
    document.documentElement.classList.remove('theme1', 'theme2', 'theme3');
    document.documentElement.classList.add(themeColor[newThemeColorSelected].theme); 
  };
  
  return (
      <button 
        className={`z-10 cursor-pointer rounded-full bg-gradient-to-l transition-all duration-500 ${themeColor[themeColorSelected].color} ${customClass}`}
        onClick={() => handleTheme()}
      >
      </button>
  );
}
