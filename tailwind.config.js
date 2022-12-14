/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(.05,.85,.45,.96) infinite",
      },
    },
  },
  plugins: [],
};
