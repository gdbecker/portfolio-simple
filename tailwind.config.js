/** @type {import('tailwindcss').Config} */

/* ColorHunt palette link: https://colorhunt.co/palette/e8e2dbfab95bf5564e1a3263 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "white": "#FFFFFF",
      "offWhite": "#F0F0F0",
      "lightGrey": "#DBDBDB",
      "grayishBlue": "#7B879D",
      "darkBlue": "#1F3251",
      "themeNavy": "#1A3263",
      "themeRed": "#F5564E",
      "themeOrange": "#FAB95B",
      "themeGray": "#E8E2DB",
    },
    extend: {
      fontFamily: {
        aileronRegular: "Aileron-Regular",
        aileronSemiBold: "Aileron-SemiBold",
        ddinRegular: "DDin-Regular",
        ddinBold: "DDin-Bold",
        cardoRegular: "Cardo-Regular",
        cardoBold: "Cardo-Bold",
        quattrocentoRegular: "Quattrocento-Regular",
        quattrocentoBold: "Quattrocento-Bold",
      },
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
