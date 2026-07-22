/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f4',
          100: '#dcf0e4',
          200: '#bbe1cd',
          300: '#8acba9',
          400: '#54ad80',
          500: '#2f8f61',
          600: '#1f724c',
          700: '#1a5b3e',
          800: '#174833',
          900: '#143b2c',
          950: '#0a2118',
        },
        slatey: {
          50: '#f6f8fa',
          100: '#eaeef2',
          200: '#d2dae2',
          300: '#aebcc9',
          400: '#8295a8',
          500: '#61788f',
          600: '#4d6075',
          700: '#3f4e60',
          800: '#374250',
          900: '#1f2733',
          950: '#131820',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20, 59, 44, 0.18)',
        glow: '0 0 0 1px rgba(47, 143, 97, 0.15), 0 20px 50px -20px rgba(47, 143, 97, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
