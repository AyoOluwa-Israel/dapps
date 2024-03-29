/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroDesktopBg: "url('assets/images/heroBg.png')",
        mobile1: "url('assets/images/mobile1.png')",
        mobile2: "url('assets/images/mobile2.png')",
        heroDesktop2Bg: "url('assets/images/heroBg2.png')",
      },
    },
  },
  plugins: [],
};
