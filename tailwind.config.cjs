/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main" : "#015239",
        "dim"  : "#f1f5f9",
        "body1": "#113A2D",
        "body2": "#a1a1aa",
        "body3": "#E4FAEE",
        "body4": "#F4F4F6",
        "stu1" : "#93c5fd",
        "stu2" : "#ccfbf1",
      }
    },
  },
  plugins: [],
}
