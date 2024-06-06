import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales, pathnames, localePrefix} from './config';
 
export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix
});
 
export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};