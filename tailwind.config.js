/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish:["Mullish","sans-serif"],
      },
      colors:{
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        greenLight:"#61cea6",
        grayText:"#818597",
        lightGray:"#e2e2e2",
        grayBlue:"#344a6c",
        deepBlueHead:"#162f56",
        gray2:"#525a76",
      },
      dropShadow:{
          's':['0 10px 10px rgb(0 0 0/0.1 )',
          '0 -10px 10px rgb(0 0 0 /0.1)'],
          'sx':['0 10px 10px #02042a ',
          '0 -10px 10px #02042a'],
          
      },
    },
  },
  plugins: [],
}

