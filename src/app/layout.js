import React from 'react';
import "./globals.css";
import { Sora } from "next/font/google";

const sora = Sora({ 
  subsets: ["latin"] ,
  variable: '--sora'
});
export const metadata = {
  title: "Evan Chauffour",
  description: "Evan Chauffour, développeur web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`overflowX-hidden ${sora.className}`}>
          <div className='flex flex-col' style={{ minHeight: 'calc(100vh)' }}>
            {children}
          </div>
      </body>
    </html>
    
  );
}
