/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(34 32 37)",
        secondary: "rgb(48 49 53)",
        third: "rgb(54 57 63)",
      },
    },
  },
  plugins: [],
};
