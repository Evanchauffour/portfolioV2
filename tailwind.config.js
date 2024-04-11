const { themeVariants } = require("tailwindcss-theme-variants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkText': '#DDF9EF',
        'darkPrimary': '#29D196',
        'darkSecondary': '#184F7C',
        'darkBackground': '#010403',
        'darkAccent': '#1F439E',
        'lightBackground': '#FBFEFD',
        'lightText': '#062319',
        'lightPrimary': '#2ED69B',
        'lightSecondary': '#83BAE7',
        'lightAccent': '#6185E0'
      }
    },
    fontFamily: {
      'sora': ['var(--sora)', 'sans-serif'],
    }
  },
  plugins: [
    themeVariants({
        themes: {
            light: {
                selector: ".light",
            },
            dark: {
                selector: ".dark",
            },
        },
    }),
],
};
