'use client'

import { useEffect } from 'react';

export default function RootLayout({ children }) {
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

  return children;
}
