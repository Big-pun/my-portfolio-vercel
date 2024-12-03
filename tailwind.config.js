/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-green":
          "linear-gradient(to bottom, rgba(26,108,25,1) 0%, rgba(22,121,9,1) 26%, rgba(0,255,151,1) 100%)",
      },
    },
    plugins: [],
  },
};
