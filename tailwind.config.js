module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      colors:{
        blue:{
          DEFAULT:'#4296f5'
        },
        black:{
          DEFAULT:'#13171b'
        }
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
