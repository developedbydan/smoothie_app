/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        banana: "#F5DE6E",
      },
    },
  },
  plugins: [],
};
