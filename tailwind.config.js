/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],



  theme: {
    fontFamily: {
      spectral: ['Spectral', 'serif'],
      open: ['Open Sans', 'sans-serif'],
      popin: ['Poppins', 'sans-seri'],
      cur: ['Courier New'],
      jost: ['Jost', 'sans-serif']
    },



    // screens: {
    //   'xs': '480px',
    //   // => @media (min-width: 480px) { ... }
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },


    extend: {
      // colors: {
      //   'regal-blue': '#243c5a',
      //   'dark-blue': '#0B1D33'
      // },




      padding: {
        '5px': '5px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '40px': '40px',

      },





    },

  },
  plugins: [

  ],
}
