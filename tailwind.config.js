/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        rowSet: '250px 150px 250px',
        rowSetTabletVSkills: '230px 180px 230px',
        rowSetTabletVProjects: '230px 230px 230px',
        rowSet2: '180px 120px 180px',
        rowSet3: '170px 140px 170px',
        rowSet4: '130px 70px 130px',
        rowSet5: '105px 105px 105px',
        rowSet6: '230px 230px 230px',
      },
      gridTemplateColumns: {
        colSet: '250px 120px 250px',
      },
      backgroundImage: {
        'skillsBG': "url('../public/assets/picBG5.png')",
        'projectsBG': "url('../public/assets/picBG4.png')",
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      // P_WMax = phone width max, p_HMax = phone height max, Ta_v = tablet vertical
      tabletV: { raw: '(max-width: 800px) and (min-height: 1000px)' },
      phoneWMax: { max: '420px' },
      phoneHMax: { raw: '(max-height: 400px)' },
      smPhoneWMax: { max: '360px' },
    },
  },
  plugins: [],
};
