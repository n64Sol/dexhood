import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0b0e11",
        surface: "#12161c",
        raised: "#1a2028",
        line: "#2a323c",
        ink: "#e8edf2",
        mute: "#8b97a4",
        up: "#3dd68c",
        down: "#f6465d",
        hood: "#00c805",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
