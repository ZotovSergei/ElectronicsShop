import { FC } from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';
import en from '../../i18n/en.json';
import { FormattedMessage } from 'react-intl';

type i18nKeys = keyof typeof en;

interface Props extends TypographyProps {
  intlId?: i18nKeys;
}

const Typography: FC<Props> = ({ intlId, ...muiProps }) => {
  return intlId ? (
    <MuiTypography {...muiProps}>
      <FormattedMessage id={intlId} />
    </MuiTypography>
  ) : (
    <MuiTypography {...muiProps}>{intlId}</MuiTypography>
  );
};

export default Typography;
