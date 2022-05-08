module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'DMSans': ['DM Sans','sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/components/img/carrito-de-comidas.png')",
        
      }
    },
  },
  plugins: [],
}

