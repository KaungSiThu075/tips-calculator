/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dollar-sign": 'url("./src/assets/icon-dollar.svg")',
        "person-icon": 'url("./src/assets/icon-person.svg")',
      },
      colors: {
        "Very-dark-cyan": "hsl(183, 100%, 15%)",
        "Grayish-cyan": "hsl(184, 14%, 56%)",
        "Dark-grayish-cyan": "hsl(186, 14%, 43%)",
        "Strong-cyan": " hsl(172, 67%, 45%)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
