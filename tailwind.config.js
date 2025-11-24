/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#10b981", // Emerald Green
        secondary: "#64748b", // Slate Black 500
        dark: "#0f172a", // Slate Black
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
