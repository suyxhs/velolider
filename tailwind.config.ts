/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green-primary': '#1D3531',
      'green-actived': '#5D8A83',
      'green-border': '#2A4B46',
      'green-btn': '#CCEC60',
      'green-title-card': '#719D96',
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      violet: '#CEAFFA',
      mint: '#A3E8D3',
      sun: '#F9DF78',
      twitter: '#1D9BF0',
      greenYellow: "#ADFF2F",
      black: {
        DEFAULT: '#121212',
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#f0eeee',
        300: '#d6d3d1',
        400: '#a8a29e',
        500: '#78716c',
        600: '#57534e',
        700: '#44403c',
        800: '#292524',
        900: '#1c1917',
        950: '#0c0a09',
      },
    },
    fontFamily: {
      accent: ['var(--font-uxum)'],
      sans: ['var(--font-inter)'],
    },
    extend: {
      maxWidth: {
        container: '75rem',
        grid: '77.5rem',
        'text-hero': '66rem',
        'area-icons': '53.4375rem',
        'area-mockups': '59.8125rem',
        'area-cards': '82.5rem'
      },
      height: {
        "section-hero": '54.6rem',
        'area-cards': '35.1rem'
      },
      backgroundImage: {
        'hero': "url('/bg-hero2.jpg')",
        'hero-pattern': "url('/bg-hero2.jpg')",
        'popup': "url('/images/user/postPeople/popov9.jpg')"
      },
      animation: {
        'scrolling-container': 'scrolling-container 30000ms linear infinite',
      },
      keyframes: {
        'scrolling-container': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      
    },
  },
  plugins: [require('@tailwindcss/typography'), [nextui()]],
};
