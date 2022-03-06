import { IconButton } from "@mui/material";
import { Tabs, Typography } from "components";
import useDeviceType from "utils/hooks/useDeviceType";
import { ITabs } from "utils/typings";
import { StyledGrid } from "./styled";
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
          <Typography
            intlId='common.logo'
            // TODO: Добавил из-за веса стилей, styled-components не срабатывает после обновления страницы
            style={{ margin: "0 auto" }}
          />
        </>
      )}
    </StyledGrid>
  );
};

export default Navigation;
