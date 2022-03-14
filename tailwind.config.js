module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web']
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        '2xl': "1280px"
     }
    },
  },
  plugins: [],
}
