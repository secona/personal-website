/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "clash-display": "var(--clash-display)",
    },
    extend: {
      colors: {
        "neon-green": "#39FF14",
      },
    },
  },
  plugins: [],
}

