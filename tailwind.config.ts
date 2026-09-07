import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          alt: "var(--color-bg-alt)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          dark: "var(--color-dark-surface)",
        },
        border: "var(--color-border)",
        dark: {
          DEFAULT: "var(--color-dark)",
          alt: "var(--color-dark-alt)",
          surface: "var(--color-dark-surface)",
        },
        chrome: {
          1: "var(--color-chrome-1)",
          2: "var(--color-chrome-2)",
          3: "var(--color-chrome-3)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          2: "var(--color-accent-2)",
          glow: "var(--color-accent-glow)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          "on-dark": "var(--color-text-on-dark)",
          "on-dark-muted": "var(--color-text-on-dark-muted)",
        },
        brandSuccess: "var(--color-success)",
        brandError: "var(--color-error)",
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "chrome-gradient": "var(--chrome-gradient)",
        "accent-gradient": "var(--accent-gradient)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(23, 180, 232, 0.15), transparent 70%)",
        "radial-glow-strong": "radial-gradient(circle at 50% 50%, rgba(23, 180, 232, 0.3), transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(23, 180, 232, 0.25)",
        "glow-md": "0 0 25px rgba(23, 180, 232, 0.35)",
        "glow-lg": "0 0 45px rgba(23, 180, 232, 0.45)",
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
