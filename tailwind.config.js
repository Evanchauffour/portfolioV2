const { themeVariants } = require("tailwindcss-theme-variants");

/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'darkBackground': '#1E1E1E',
        'darkAccent': '#1F439E',
        'lightBackground': '#F1F1F1',
        'lightText': '#062319',
        'lightPrimary': '#2ED69B',
        'lightSecondary': '#83BAE7',
        'lightAccent': '#6185E0',
        theme2: {
          'primary': '#127DFE',
          'accent': '#B438FE',
        },
        theme3: {
          'primary': '#1BB4EE',
          'accent': '#2C0EB4',
        },
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
            darkTheme: {
              selector: ".dark",
            },
            theme1: {
                selector: ".theme1",
            },
            theme2: {
              selector: ".theme2",
            },
            theme3: {
              selector: ".theme3",
            },
        },
    }),
],
};
