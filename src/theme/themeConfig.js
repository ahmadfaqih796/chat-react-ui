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
          container: "#fff",
          main: "#556cd6",
        },
        secondary: {
          main: "#19857b",
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
          container: "#000",
          main: "#556cd6",
        },
        secondary: {
          main: "#19857b",
        },
        error: {
          main: red.A400,
        },
      },
    },
  },
});

export default theme;
