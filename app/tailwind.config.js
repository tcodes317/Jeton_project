/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xxxs: "150px",
        xxs: "300px",
        xr: "400px",
        xs: "468px",
        md: "768px",
        mmd: "820px",
        lg: "992px",
        xlg: "1024px",
        xxlg: "1240px"
      }
    },
  },
  plugins: [],
}