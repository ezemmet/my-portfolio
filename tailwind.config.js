/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      fontPrompt : ["Prompt"],
      fontJosefin : [ "Josefin Sans"],
      fontKanit : ["Kanit"],
      fontNunito : ["Nunito Sans"],
    },
  },
  plugins: [],
}

