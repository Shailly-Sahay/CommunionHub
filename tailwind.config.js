/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        md: ["1.4rem", "1rem"], //Small font size
        lg: ["1.6rem", "2rem"], // Body font size
        xl: ["1.8rem", "2rem"],
        "2xl": ["2rem", "2.5rem"], // Tertiary Heading
        "3xl": ["3rem", "3.5rem"], // Large font size
        "4xl": ["4rem", "4.5rem"], // Secondary Heading
        "5xl": ["5rem", "5rem"],
        "6xl": ["6rem", "6.5rem"], // Primmary heading
        "7xl": ["7rem", "7.5rem"],
        "8xl": ["8rem", "8.5rem"],
        "9xl": ["9rem", "9.5rem"],
        "10xl": ["10rem", "10.5rem"],
      },

      colors: {
        primary: {
          DEFAULT: "#6919ff",
          100: "#8747ff",
          200: "#5414cc",
          300: "#3f0f99",
        },
        secondary: {
          DEFAULT: "#da77f2",
          801000: "#e4a3e1",
        },
      },
      fontFamily: {
        antique: ["Antique Olive Std", "sans-serif"],
        bruce: ["Bruce Forever"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      backgroundImage: {
        "radial-white": "radial-gradient(closest-side, #ffffff, transparent)",
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [],
};
