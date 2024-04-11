'use client'

import React, { useState } from 'react';
import "./globals.css";
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes"

const sora = Sora({ 
  subsets: ["latin"] ,
  variable: '--sora'
});
// export const metadata = {
//   title: "Evan Chauffour",
//   description: "Evan Chauffour, développeur web",
// };

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <ThemeProvider attribute="class">
      <body className={`overflow-x-hidden light:bg-lightBackground dark:bg-darkBackground ${sora.className}`}>
          <div className='flex flex-col' style={{ minHeight: 'calc(100vh)' }}>
            {children}
          </div>
      </body>
      </ThemeProvider>
    </html>
    
  );
}
