/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind");

module.exports = {
  // content: ["./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  content: ["./App.tsx", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [nativewind],
};
