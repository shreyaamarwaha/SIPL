import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sipl-blue": "#001B65",
        eggshell: "#F9F8F3",
        "muted-gold": "#D4AF37",
        background: "#F5F8FC",
        foreground: "#001B65",
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plus-jakarta)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        clinical: "4px",
      },
    },
  },
};

export default config;
