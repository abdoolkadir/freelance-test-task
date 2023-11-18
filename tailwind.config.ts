import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB3A4A',
        secondary: '#CACACE',
        active: 'rgba(235, 58, 74, 0.50)'
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', y: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'none' }
        },
        'tilting-animation': {
          '0%': {
            transform: 'perspective(400px)  rotateX(0deg) rotateY(0deg)'
          },
          '50%': {
            transform: 'perspective(400px) rotateX(-20deg) rotateY(-10deg)'
          },
          '100%': {
            transform: 'perspective(400px) rotateX(0deg) rotateY(0deg)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
        'tilting-animation': 'tilting-animation 2000ms ease-in-out infinite'
      }
    }
  },
  plugins: []
};
export default config;
