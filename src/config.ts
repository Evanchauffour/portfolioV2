import {Pathnames} from 'next-intl/navigation';

export const defaultLocale = 'fr' as const;
export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/projects': '/projects',
  '/projects[id]': '/projects[id]',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;