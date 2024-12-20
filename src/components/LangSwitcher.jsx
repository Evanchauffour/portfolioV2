'use client'

import { useParams } from 'next/navigation';
import { useRouter, usePathname } from '../navigation';
import {useLocale} from 'next-intl';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

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

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    console.log(pathname, params, nextLocale);
    router.replace(
      {pathname, params},
      {locale: nextLocale}
    );
    setTimeout(() => {
      router.refresh();
      const storedThemeColor = localStorage.getItem('themeColor');
      if (storedThemeColor) {
        document.documentElement.classList.remove('theme1', 'theme2', 'theme3');
        document.documentElement.classList.add(themeColor[storedThemeColor].theme); 
      }
    }, 300);
    
  }

  return (
    <select
      className="z-20 rounded-lg border p-2 light:border-darkBackground light:bg-lightBackground light:text-lightText darkTheme:border-lightBackground darkTheme:bg-darkBackground darkTheme:text-darkText"
      defaultValue={locale}
      onChange={onSelectChange}
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  );
}
