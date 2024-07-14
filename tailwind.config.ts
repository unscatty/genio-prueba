import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pomegranate: {
          DEFAULT: '#F42525',
          50: '#FDD4D4',
          100: '#FCC0C0',
          200: '#FA9A9A',
          300: '#F87373',
          400: '#F64C4C',
          500: '#F42525',
          600: '#D60B0B',
          700: '#A10808',
          800: '#6B0505',
          900: '#360303',
          950: '#1B0101'
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
