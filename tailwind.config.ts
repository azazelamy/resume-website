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
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
        },
        neumorphic: {
          light: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.4)",
        },
      },
      boxShadow: {
        'neumorphic': `
          8px 8px 16px rgba(0, 0, 0, 0.4),
          -8px -8px 16px rgba(255, 255, 255, 0.05)
        `,
        'neumorphic-inset': `
          inset 8px 8px 16px rgba(0, 0, 0, 0.4),
          inset -8px -8px 16px rgba(255, 255, 255, 0.05)
        `,
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
      },
    },
  },
  plugins: [],
};

export default config;
