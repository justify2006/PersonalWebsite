/** @type {import('tailwindcss').Config} */
export default {
  safelist: [
    'translate-y-0',
    'translate-y-full',
    // add any custom animation classes like "animate-float-slow", etc.
    'animate-float-slow',
    'animate-float-medium',
    'animate-float-fast'
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
