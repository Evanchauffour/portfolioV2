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
        'text': '#DDF9EF',
        'primary': '#29D196',
        'secondary': '#184F7C',
        'background': '#010403',
        'accent': '#1F439E'
      }
    },
    fontFamily: {
      'sora': ['var(--sora)', 'sans-serif'],
    }
  },
  plugins: [],
};
