import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Transition from '../../components/Transition';
import CircleTransition from '../../components/CircleTransition';

const sora = Sora({ 
  subsets: ["latin"] ,
  variable: '--sora'
});

export const metadata = {
  title: 'Evan Chauffour',
  description: "Portfolio de Chauffour Evan, développeur full stack passionné par la création de sites web dynamiques et d'applications mobile. Explorez mes travaux en front-end et back-end dans mon portfolio.",
}
 
export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
        <ThemeProvider attribute="class" enableSystem={false}>
            <body className={`overflow-x-hidden light:bg-lightBackground darkTheme:bg-darkBackground ${sora.className}`}>
                <NextIntlClientProvider messages={messages}>
                <CircleTransition />
                <Transition>
                    <div className='flex flex-col' style={{ minHeight: 'calc(100vh)' }}>
                      {children}
                    </div>
                    <SpeedInsights />
                </Transition>
                </NextIntlClientProvider>
            </body>
        </ThemeProvider>
    </html>
  );
}