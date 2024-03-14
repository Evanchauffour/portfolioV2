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
        'text': '#020E03',
        'primary': '#c93535',
        'secondary': '#083134',
        'background': '#FAFEFA',
        'grey': '#918f8f',
        'accent': '#FDCA40'
      }
    },
    fontFamily: {
      'sora': ['var(--sora)', 'sans-serif'],
    }
  },
  plugins: [],
};
