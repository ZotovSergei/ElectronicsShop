import Container from '@mui/material/Container';
import type { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import intlEn from '../i18n/en.json';
// import intlRu from '../i18n/ru.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <IntlProvider locale='en' messages={intlEn} defaultLocale='en'>
        <Component {...pageProps} />
      </IntlProvider>
    </Container>
  );
}

export default MyApp;
