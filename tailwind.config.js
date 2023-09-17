/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

/**
 * Quick ref TW defaults:
 * fontSize.base = 16px
 *
 * BPs:
 * sm   520px
 * md   768px
 * lg   1024px
 * xl   1280px
 * 2xl  1536px
 */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,tsx}",
    "./src/css/**/*.{css}",
    "./src/helpers/**/*.{js,ts,tsx}",
    "./src/pages/**/*.{js,ts,tsx}",
    "./src/state/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "520px",
        // => @media (min-width: 520px) { ... }
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const spacingUtilities = {
        ".px-dynamic-block": {
          "padding-left": "clamp(1rem, 0.6667rem + 1.4815vw, 2rem)",
          "padding-right": "clamp(1rem, 0.6667rem + 1.4815vw, 2rem)",
        },
      };

      addUtilities(spacingUtilities);
    }),
  ],
};
