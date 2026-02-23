// Update this file in your Tailwind config
// Replace tailwind.config.js with contents from this file

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2d5016',
        'parchment': '#f5f1e8',
        'gold-amber': '#d4a574',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}  
