import { IconButton } from "@mui/material";
import { Tabs } from "components";
import useDeviceType from "utils/hooks/useDeviceType";
import { StyledGrid, StyledLogo, StyledDrawer } from "./styled";
import MenuIcon from "@mui/icons-material/Menu";
import useOpen from "utils/hooks/useOpen";

const Navigation = () => {
  const { isDesktop } = useDeviceType();
  const { isOpen, toggle } = useOpen();

  return (
    <StyledGrid
      container
      justifyContent={isDesktop ? "flex-end" : "flex-start"}
      alignItems='center'
    >
      {isDesktop ? (
        <Tabs />
      ) : (
        <>
          <IconButton onClick={toggle}>
            <MenuIcon />
          </IconButton>
          <StyledLogo intlId='common.logo' />
          <StyledDrawer open={isOpen} onBlur={toggle} transitionDuration={500}>
            <Tabs />
          </StyledDrawer>
        </>
      )}
    </StyledGrid>
  );
};

export default Navigation;
