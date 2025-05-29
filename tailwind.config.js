// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
      keyframes: {
        morph: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      borderRadius: {
        morph: '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        cascadia: ['"Cascadia Code"', 'monospace'],
        montserrat: ['Montserrat', 'sans-serif'],
        poetsen: ['"Poetsen One"', 'cursive'],
      },
    },
  },
  plugins: [],
}
