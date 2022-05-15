import { FC } from "react";
import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { i18nKeys } from "utils/typings";
interface Props extends TypographyProps {
  intlId?: i18nKeys;
}

const Typography: FC<Props> = ({ intlId, children, ...muiProps }) => {
  return intlId ? (
    <MuiTypography {...muiProps}>
      <FormattedMessage id={intlId} />
    </MuiTypography>
  ) : (
    <MuiTypography {...muiProps}>{children}</MuiTypography>
  );
};

export default Typography;
