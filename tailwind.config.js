/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-japonais': '#1e3a8a',
        'bleu-nuit': '#0f172a',
        'bleu-clair': '#3b82f6',
        'or-japonais': '#FFA559',
        'gris-pierre': '#1f2937',
        'encre-noire': '#0c0a09',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
