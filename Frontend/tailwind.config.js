/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDarkViolet: "#060417",
        hvbtncolor:"#a993fe",
        hvbtnbgcolor:"#000" // Add custom color here
      },
    },
  },
  plugins: [],
};
