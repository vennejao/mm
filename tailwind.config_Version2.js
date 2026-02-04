module.exports = {
  content: [
    './**/*.html',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#b026ff',
        'neon-cyan': '#00f3ff',
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'body': ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: [],
}