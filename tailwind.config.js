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
        thirdCol: "#ffba42",
        textColor: "#020617",
        titleCol: "#0b1e33",
      },
      backgroundImage: {
        mainColGradient:
          "radial-gradient(circle, rgba(59,138,153,1) 0%, rgba(11,91,146,1) 80%)",
        lightColGradient:
          "radial-gradient(circle, #9cd54b 0%, rgba(11,91,146,1) 80%)",
        radial2: "bg-gradient-to-b from-blue-800 to-blue-500",
      },
    },
  },
  plugins: [],
};
