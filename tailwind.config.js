/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      boxShadow: {
        card: '0 35px 60px  rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif']
      }
    }
  },
  plugins: []
}
