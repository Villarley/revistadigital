/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Bg": "#e6e6e6",
        "DarkFont": "#0d0d0d",
        "Blue": "#085987",
        "Orange":"##ff8000"
      },
    },
  },
  plugins: [],
};

