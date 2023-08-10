/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage:{
        'herro-pattern': "url('images/bg-desktop.svg')",
      }
    },
  },
  plugins: [],
}

