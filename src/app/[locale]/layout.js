import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { Sora } from "next/font/google";
import { ThemeProvider } from "next-themes"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const sora = Sora({ 
  subsets: ["latin"] ,
  variable: '--sora'
});
 
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
                    <div className='flex flex-col' style={{ minHeight: 'calc(100vh)' }}>
                      {children}
                    </div>
                    <SpeedInsights />
                </NextIntlClientProvider>
            </body>
        </ThemeProvider>
    </html>
  );
}