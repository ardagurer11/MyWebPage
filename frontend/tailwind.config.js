/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-moss': '#17290B',
        'soft-beige': '#F3EFE0',
        'darker-soft-beige': '#c3724a',
        'vibrant-teal': '#33A6B8',
        'muted-coral': '#D17A54',
        'pale-mint': '#98D7C2',
        'lighter-dark-moss': '#38651b',
        'darker-muted-coral': '#6e361d'
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     '.scrollbar-hide': {
    //       /* IE and Edge */
    //       '-ms-overflow-style': 'none',

    //       /* Firefox */
    //       'scrollbar-width': 'none',

    //       /* Safari and Chrome */
    //       '&::-webkit-scrollbar': {
    //         display: 'none'
    //       }
    //     }
    //   }
    //   )
    // })
  ],
};
