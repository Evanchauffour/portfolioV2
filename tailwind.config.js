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
        'text': '#00040E',
        'primary': '#0F3DFE',
        'secondary': '#C56CFE',
        'background': '#F3F5FF',
        'accent': '#DF39FE'
      }
    },
    fontFamily: {
      'sora': ['var(--sora)', 'sans-serif'],
    }
  },
  plugins: [],
};
