import Container from '@mui/material/Container';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <IntlProvider locale='en' messages={{}} defaultLocale='en'>
        <Component {...pageProps} />
      </IntlProvider>
    </Container>
  );
}

export default MyApp;
