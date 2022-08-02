/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#4834d4",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [],
};
