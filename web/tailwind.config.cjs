/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/galaxy.png')",
        'nlw-linear':
          'linear-gradient(75deg, #9572FC 10%, #43E7AD 45%, #E1D55D 70%)',
        'game-gradient':
          'linear-gradient(188deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.8) 67.88%)'
      },
      backgroundColor: {
        nlw: '#121214'
      },
      colors: {
        'gradiente-top':
          'linear-gradient(75deg, #9572FC 10%, #43E7AD 45%, #E1D55D 70%)'
      }
    },
    plugins: []
  }
}
