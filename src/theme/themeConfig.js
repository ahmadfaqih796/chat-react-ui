import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        transition: "all 0.2s ease-in-out",
        background: {
          //  layout: "linear-gradient(45deg, #f0f5ff 30%, #adc6ff 90%)",
          main: "#556cd6",
          layout: "#557cd6",
          container: "#fafafa",
        },
        primary: {
          default: "#d6e4ff",
          container: "#fff",
          main: "#3f50b5",
        },
        secondary: {
          default: "#d9f7be",
          main: "#d9f7be",
        },
        error: {
          main: red.A400,
        },
      },
    },
    dark: {
      palette: {
        transition: "all 0.5s ease-in-out",
        background: {
          main: "#003a8c",
          container: "#262626",
          layout: "#030852",
        },
        primary: {
          default: "#061178",
          container: "#000",
          main: "#002884",
        },
        secondary: {
          default: "#135200",
          main: "#135200",
        },
        error: {
          main: red.A400,
        },
      },
    },
  },
});

export default theme;
