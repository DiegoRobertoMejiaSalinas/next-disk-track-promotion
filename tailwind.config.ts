import type { Config } from "tailwindcss";
const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/table.js", 
    
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1360px",
        "3xl": "1440px",
      },
    },
    extend: {
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/8': '12.5%',
        '2/8': '25%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
      },
      lineHeight: {
        'extra-tight': '0.75 !important',
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        ...colors,
        "light-gold": "#FF9429",
        "dark-gold": "#bd6d24",
        "oblivion": "#131313",
        "light-oblivion": "#f1f2f6"
      },
    },
  },
  plugins: [
    nextui()
  ],
};
export default config;
