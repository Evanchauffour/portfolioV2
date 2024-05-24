'use client'

import React, { useEffect } from 'react';
import "./globals.css";
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes"
import Transition from './transition';

const sora = Sora({ 
  subsets: ["latin"] ,
  variable: '--sora'
});

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

  return (
    <html lang="fr">
      <ThemeProvider attribute="class" enableSystem={false}>
        <body className={`overflow-x-hidden light:bg-lightBackground darkTheme:bg-darkBackground ${sora.className}`}>
            <div className='flex flex-col' style={{ minHeight: 'calc(100vh)' }}>
              <Transition>{children}</Transition>
            </div>
        </body>
      </ThemeProvider>
    </html>
    
  );
}
