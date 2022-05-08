import styled, { css } from "styled-components";
import { Drawer, Typography } from "components";
import { Grid } from "components/Grid";
export const StyledGrid = styled(Grid)`
  height: 48px;
  position: sticky;
  top: 0;
`;
export const StyledLogo = styled(Typography)`
  margin: 0 auto;
`;

export const StyledDrawer = styled(Drawer)`
  [class*="MuiDrawer-paper"] {
    border: none;
    width: 50vw;
    ${({ theme }) =>
      css`
        ${theme.breakpoints.down("sm")} {
          width: 100vw;
        }
      `}
  }
`;
