/** @type {import('tailwindcss').Config} */

/* ColorHunt palette link: https://colorhunt.co/palette/21336317594a8eac50d3d04f */

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
      // "offWhite": "#F0F0F0",
      // "offWhite": "#FFFCF2",
      "offWhite": "#F5F5F5",
      "lightGray": "#DBDBDB",
      "grayishBlue": "#7B879D",
      "darkBlue": {
        100: "#213363",
        200: "#1D2D59",
      },
      "darkGreen": "#17594A",
      "mediumGreen": "#8EAC50",
      "lightGreen": "#D3D04F",
    },
    extend: {
      fontFamily: {
        geistBold: "Geist-Bold",
        geistSemiBold: "Geist-SemiBold",
        geistRegular: "Geist-Regular",
        geistMonoBold: "GeistMono-Bold",
        geistMonoSemiBold: "GeistMono-SemiBold",
        geistMonoRegular: "GeistMono-Regular",
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
