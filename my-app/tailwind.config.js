module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
