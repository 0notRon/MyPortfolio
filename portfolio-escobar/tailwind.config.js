// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ["'Great Vibes'", "cursive"],
        pacifico: ["'Pacifico'", "cursive"],
        playfair: ["'Playfair Display'", "serif"],
        merriweather: ["'Merriweather'", "serif"],
        robotoslab: ["'Roboto Slab'", "serif"],
      },
    },
  },
  plugins: [],
};
