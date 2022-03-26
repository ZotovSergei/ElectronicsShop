import { createTheme, ThemeOptions } from "@mui/material/styles";

export const useCustomTheme = (theme?: ThemeOptions) =>
  createTheme(theme || {});
