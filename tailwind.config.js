/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: 'rgb(247 254 200)',
      },
      container: {
        center: true,
        padding: '10rem',
      }
    },
  },
  plugins: [],
}
