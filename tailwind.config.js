/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'filter' : 'rgba(0,0,0,.5)'
      },
      colors: {
        tertiary: "#151030",
      },
    },
  },
  plugins: [],
}
