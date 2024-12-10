/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        biko: ['"Biko"', "sans-serif"],
        starjedi: ['"Starjedi"', "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [tailwindcssAnimate],
};
