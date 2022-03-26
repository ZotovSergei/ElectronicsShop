import { useMediaQuery, useTheme } from "@mui/material";

const useDeviceType = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  return {
    isDesktop,
    isTablet,
    isPhone,
  };
};

export default useDeviceType;
