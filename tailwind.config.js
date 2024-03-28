/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primaryViolet: 'hsl(257, 40%, 49%)',
        primarySoftMagenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        Poppins400: '400',
        Poppins600: '600',
        OpenSans400: '400',
      },
      backgroundImage: {
        desktop: "url('/src/images/bg-desktop.svg')",
        mobile: "url('/src/images/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
}
