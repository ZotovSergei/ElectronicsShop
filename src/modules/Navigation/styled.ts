import { Drawer, Typography } from "components";
import { Grid } from "components/Grid";
import styled, { css } from "styled-components";

export const StyledGrid = styled(Grid)`
  height: 48px;
  position: sticky;
  top: 0;
`;
export const StyledLogo = styled(Typography)`
  margin: 0 auto;
`;

export const StyledDrawer = styled(Drawer)<{ $isTablet: boolean }>`
  [class*="MuiDrawer-paper"] {
    border: none;
    width: ${({ $isTablet }) => ($isTablet ? "50vw" : "100vw")};
  }
`;
