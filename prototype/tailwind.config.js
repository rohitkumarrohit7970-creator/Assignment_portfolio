/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#FFFFFF",
          200: "#F3F4F6",
          300: "#E5E7EB",
          content: "#1F2937",
        },
      },
    },
  },
  plugins: [],
}
