/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#3b8a99",
        secCol: "#0b5b92",
        thirdCol: "#9cd54b",
        textColor: "#e2e8f0",
      },
      backgroundImage: {
        mainColGradient: "linear-gradient(0deg, #FFFFFF 0%, #3B8A99 100%)",
      },
    },
  },
  plugins: [],
};
