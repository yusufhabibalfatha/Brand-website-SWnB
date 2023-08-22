/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat"],
      },
      colors: {
        "color-one": "#F5F5F5",
        "color-two": "#212121",
      },
    },
  },
  plugins: [],
};
