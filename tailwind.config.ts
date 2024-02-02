/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262627',
        secondary: '#39393A',
        tertiary: '#525252',
        border: '#E2E2E2',
        accent: '#6D28D9',
        popover: '#F9F9F9',
        white: '#ffffff',
        dark: '#000000',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
