/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/views/**/*.html.slim",
    "./app/helpers/**/*.rb",
    "./app/frontend/**/*.js",
    "./app/frontend/**/*.jsx",
    "./app/frontend/**/*.ts",
    "./app/frontend/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
