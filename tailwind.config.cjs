/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./constants/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          DEFAULT: "1240px",
        },
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        sora: ["'Sora', sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          200: "#FFFFFF99",
          300: "#FFFFFF4D",
        },
        neutral: {
          100: "#FAFAFBFF",
          150: "#F8F9FAFF",
          300: "#DEE1E6B3",
          400: "#BDC1CAFF",
          600: "#171A1FA8",
          700: "#323743FF",
          900: "#191C23FF",
        },
        tertiary4: {
          500: "#0021FFFF",
        },
        secondary: {
          100: "#F2F4FDFF",
          200: "#B7C1F34D",
          500: "#203ABDC9",
        },
        primary: {
          150: "#D7D9FFFF",
          500: "#2B39FFFF",
          600: "#0010F1FF",
        },
        warning: {
          500: "#DD910D9E",
        },
        success: { 500: "#6B900EFF", 700: "#0B8734FF", 750: "#096D2AFF", 800: "#075320FF" },
      },
      backgroundImage: {
        home: "url('/assets/images/home.jpg')",
        career: "url('/assets/images/career-hero-img-2.png')",
      },
      boxShadow: {
        xs: "0px 0px 1px #rgb(23 26 31 / 20%), 0px 0px 2px #rgb(23 26 31 / 20%)",
        m: "0px 4px 9px rgb(23 26 31 / 20%), 0px 0px 2px rgb(23 26 31 / 20%)",
        l: "0px 8px 17px rgb(23 26 31 / 20%), 0px 0px 2px rgb(23 26 31 / 20%);",
      },
      fontSize: {
        title: "52px",
      },
      borderRadius: {
        m: "2px",
      },
      animation: {
        fade: "fadeIn 0.35s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
