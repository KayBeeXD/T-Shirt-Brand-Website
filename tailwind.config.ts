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
        clean: "#F8F8F4",
        forest: "#1C2419",
        olive: "#475839",
        rust: "#B85B35",
        lime: "#C4E869",
      },
    },
  },
  plugins: [],
};

export default config;
