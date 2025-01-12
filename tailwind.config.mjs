import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#80B3FF",
  400: "#6583C8",
  600: "#305088",
  800: "#243D6A",
  900: "#203560",
  950: "#1A2D4C",
};

const gray = {
  100: "#F6FAFD",
  200: "#EAF4FB",
  300: "#C4D9EC",
  400: "#D9E8FF",
  500: "#274276",
  600: "#203560",
  700: "#1F324F",
  800: "#131E35",
  900: "#0F1626",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
