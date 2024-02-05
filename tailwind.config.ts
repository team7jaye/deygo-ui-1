import type { Config } from 'tailwindcss';
// tailwind.config.js
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10: '#FB3D3D', //red
          20: '#444', //grey
          30: '#BDBDBD', //light grey
          40: '#302F2F', // sub header grey
        },
        secondary: {
          10: '#545353', //grey color
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
