/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");

const colors = {
  ...defaultColors,

  // Adjusted colors
  pink: {
    DEFAULT: "#f293bb",
    100: "#3e0424",
    200: "#7d0857",
    300: "#bc0c70",
    400: "#d14d92",
    500: "#f293bb",
    600: "#f4a3c3",
    700: "#f6b3cb",
    800: "#f8c3d3",
    900: "#f9d3db",
  },
  sky_blue: {
    DEFAULT: "#3da9c4",
    100: "#07262e",
    200: "#0e4c5b",
    300: "#166e88",
    400: "#1d91b5",
    500: "#3da9c4",
    600: "#60b8d0",
    700: "#82c8dd",
    800: "#a5d7e9",
    900: "#c8e7f5",
  },

  fb_icon: { DEFAULT: "#1877F2" },
  discord_icon: { DEFAULT: "#7289d9" },
  linkedin_icon: { DEFAULT: "#0077B5" },
  github_icon: { DEFAULT: "#2B3137" },
};

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: colors,
    extend: {},
  },
  plugins: [],
};
