/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#41b941",
        "background-light": "#f6f8f6",
        "background-dark": "#141e14",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"],
        oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}