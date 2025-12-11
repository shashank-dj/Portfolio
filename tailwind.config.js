/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b6cff",
        dark: "#0f172a",
        light: "#f1f5f9"
      }
    }
  },
  plugins: [],
};
