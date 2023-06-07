/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#332500',
          600: '#564007',
          500: '#FFB800',
          400: '#FFC633',
          300: '#FFDB80',
          200: '#FFEDCB'
        },
        accent: {
          300: '#006699',
          200: '#269DD9',
          100: '#D4EBF7'
        },
        success: {
          300: '#005C51',
          200: '#00B8A4',
          100: '#CCFFF9'
        },
        danger: {
          300: '#991B1B',
          200: '#D5494C',
          100: '#FECACA'
        },
        grayscale: {
          800: '#1D1D1D',
          700: '#292C32',
          600: '#3D3F43',
          400: '#94979E',
          300: '#D7D8DB',
          200: '#F2F2F2'
        }
      },
      screens: {
        xs: '480px'
      },
      boxShadow: {
        card: '0 35px 60px  rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif']
      },
      keyframes: {
        run_l_r: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        run_r_l: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        run_t_b: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        run_b_t: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        run_l_r: 'run_l_r 2s ease-in-out infinite',
        run_r_l: 'run_r_l 2s ease-in-out infinite',
        run_t_b: 'run_t_b 2s ease-in-out infinite',
        run_b_t: 'run_b_t 2s ease-in-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
}
