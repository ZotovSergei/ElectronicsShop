import { ThemeOptions } from "@mui/material/styles";
export type ThemeType = typeof defaultTheme;
export const themeLaptops: ThemeOptions = {
  palette: {
    primary: {
      main: "#23f21f",
    },
    secondary: {
      main: "#f21fb7",
    },
  },
};

export const themeSmartPhones: ThemeOptions = {
  palette: {
    primary: {
      main: "#f511a9",
    },
    secondary: {
      main: "#f511ed",
    },
  },
};

export const getDefaultThemeOptions = (): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1280,
      lg: 1440,
      xl: 2150,
    },
  },
  palette: {
    primary: {
      main: "#f511a9",
    },
    secondary: {
      main: "#f511ed",
    },
  },
});

const makeDefaultTheme = () => getDefaultThemeOptions();
export const defaultTheme = makeDefaultTheme();

export type MakeTheme = typeof makeDefaultTheme;
export default makeDefaultTheme;
