/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        backgroundDark: "#020617",
        backgroundMid: "#052e16",
        backgroundSoft: "#022c22",

        emeraldAccent: "#10B981",
        limeAccent: "#A3E635",

        graySoft: "#9CA3AF",
        grayLight: "#D1D5DB",

        whiteSoft: "#F9FAFB"

      },
    },
  },
  plugins: [],
}