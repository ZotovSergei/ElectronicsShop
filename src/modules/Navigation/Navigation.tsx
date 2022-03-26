import { IconButton } from "@mui/material";
import { Tabs } from "components";
import useDeviceType from "utils/hooks/useDeviceType";
import { ITabs } from "utils/typings";
import { StyledGrid, StyledLogo } from "./styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Routes } from "utils/enums/route";

const tabs: ITabs[] = [
  {
    value: Routes.Home,
    labelIntlId: "navigation.home",
  },
  {
    value: Routes.Laptops,
    labelIntlId: "navigation.laptops",
  },
  {
    value: Routes.SmartPhones,
    labelIntlId: "navigation.smartPhones",
  },
  {
    value: Routes.Tablets,
    labelIntlId: "navigation.tablets",
  },
  {
    value: Routes.SmartWatches,
    labelIntlId: "navigation.smartWatches",
  },
];

const Navigation = () => {
  const { isDesktop } = useDeviceType();
  return (
    <StyledGrid
      container
      justifyContent={isDesktop ? "flex-end" : "flex-start"}
      alignItems='center'
    >
      {isDesktop ? (
        <Tabs tabs={tabs} />
      ) : (
        <>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <StyledLogo intlId='common.logo' />
        </>
      )}
    </StyledGrid>
  );
};

export default Navigation;
