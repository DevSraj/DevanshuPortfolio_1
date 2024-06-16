import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
    extend: {
      colors: {
        'techno-blue': '#0ff',
        'techno-purple': '#9f00ff',
      },
      fontFamily: {
        'techno': ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 15px #0ff, 0 0 20px #0ff, 0 0 25px #0ff, 0 0 30px #0ff',
        'tecno-red': '0 0 15px #f00, 0 0 20px #f00, 0 0 25px #f00, 0 0 30px #f00',

      },
    },
  },
  plugins: [],
};
export default config;
