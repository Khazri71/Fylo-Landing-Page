/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0b1523",
        secondColor: "#181f2a",
        curvyColor: "#181f2b",
        textColor: "#e2e8f0",
        blueColor: "#339ecc",
        cyanColor: "#65e2d9",
      },
      keyframes: {
        MoveToRight: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        MoveToRight: "MoveToRight 1s ease-in-out infinite",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xlg: "1200px",
        "2xlg": "1400px",
      },
    },
  },
  plugins: [],
};
