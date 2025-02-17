import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "860px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      marineBlue: "hsl(213, 96%, 18%)",
      purplishBlue: "hsl(243, 100%, 62%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      ubuntuReg: ["Ubuntu-Regular", "sans-serif"],
      ubuntuMed: ["Ubuntu-Medium", "sans-serif"],
      ubuntuBold: ["Ubuntu-Bold", "sans-serif"],
    },
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      base: "0.9rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('/images/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('/images/bg-=sidebar-mobile.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
