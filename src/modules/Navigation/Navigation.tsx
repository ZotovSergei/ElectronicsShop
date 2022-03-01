import { Grid, IconButton } from "@mui/material";
import { Tabs } from "components";
import useDeviceType from "utils/hooks/useDeviceType";
import { ITabs } from "utils/typings";
import { StyledGrid, StyledNavigationLogo } from "./styled";
import MenuIcon from "@mui/icons-material/Menu";

const tabs: ITabs[] = [
  {
    value: "laptops",
    labelIntlId: "navigation.laptops",
  },
  {
    value: "smartPhones",
    labelIntlId: "navigation.smartPhones",
  },
  {
    value: "tablets",
    labelIntlId: "navigation.tablets",
  },
  {
    value: "smartWatches",
    labelIntlId: "navigation.smartWatches",
  },
];

const Navigation = () => {
  const { isDesktop } = useDeviceType();
  return (
    <Grid
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
          <StyledNavigationLogo
            intlId='common.logo'
            style={{ margin: "0 auto" }}
          />
        </>
      )}
    </Grid>
  );
};

export default Navigation;
