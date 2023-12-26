/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        scriptorama: ["Scriptorama", "sans-serif"],
        dihjauti: ["Dihjauti", "sans-serif"],
      },
      animation: {
        "ping-slow": "ping 1s cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        5000: "5000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "back-img": "url('/images/background.jpg')",
        "back-mobile": "url('/images/back-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
