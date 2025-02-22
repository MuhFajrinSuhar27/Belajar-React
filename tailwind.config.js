/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100vh) translateX(10vw)' },
          '100%': { transform: 'translateY(-10vh) translateX(50vw)' },
        },
        'float-image': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blink: {
          '0%, 96%, 100%': { transform: 'scale(1)' },
          '98%': { transform: 'scale(0.1)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(255, 107, 107, 0.7)' },
          '100%': { textShadow: '0 0 20px rgba(255, 107, 107, 0.9), 0 0 30px rgba(255, 107, 107, 0.5)' },
        },
        'fly-around': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(100px, -50px) rotate(90deg)' },
          '50%': { transform: 'translate(50px, 100px) rotate(180deg)' },
          '75%': { transform: 'translate(-100px, 50px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 15s infinite linear',
        'float-image': 'float-image 4s ease-in-out infinite',
        blink: 'blink 3s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'fly-around': 'fly-around 20s linear infinite',
      },
    },
    },
 
  plugins: [],
}

