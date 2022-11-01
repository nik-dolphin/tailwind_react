/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        97: "21rem",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.blue.600")} ${theme(
            "colors.blue.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "2px",
          width: "14px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#666565",
          borderRadius: "16px",
          boxShadow: "inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%)"
        },
        ".scrollbar::-webkit-scrollbar-track": {
          background: "linear-gradient(90deg,#434343,#434343 1px,#111 0,#111)",
        },
      });
    }),
  ],
};
