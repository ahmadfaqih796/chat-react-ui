import { useColorScheme } from "@mui/material";

export const useModeTheme = () => {
  const { mode, setMode } = useColorScheme();
  const valueMode = !mode ? "system" : mode;

  const onMode = (theme) => {
    switch (theme) {
      case "light":
        setMode("light");
        break;
      case "dark":
        setMode("dark");
        break;
      default:
        setMode("system");
    }
  };

  return { mode: valueMode, onMode };
};
