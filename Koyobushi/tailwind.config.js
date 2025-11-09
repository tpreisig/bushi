/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

