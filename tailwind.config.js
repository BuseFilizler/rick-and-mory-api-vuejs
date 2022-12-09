/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      'mavi': '#72C7D1',
      'acikmavi': '#D7F2F2',
      'lacivert': '#3B4973',
      'yesil': '#97C869',
      'beyaz': '#FFFFFF',
      'siyah': '#1B1B1B'
    },
    fontSize: {
      'xxs': '0.55rem',
    },
    extend: {
      spacing: {
        '110' : "400px",
        '55': "200px"
      }
    },
  },
  plugins: [],
}

