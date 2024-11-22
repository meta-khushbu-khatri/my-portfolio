/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Fav1: ["Roboto Slab", "serif"]
      },
      colors:{
        primary:"#27272A",
        secondry: "#3F3F46"
      }
    },
  },
  plugins: [],
}