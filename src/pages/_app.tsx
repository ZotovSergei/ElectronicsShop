import Container from "@mui/material/Container";
import AuthorizedLayout from "../modules/Layout/AuthorizedLayout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import intlEn from "../i18n/en.json";
import Layout from "../modules/Layout";
// import intlRu from '../i18n/ru.json';

interface Config {
  Layout?: string;
  disableGutters?: boolean;
}

type NextPageWithLayout = NextPage & {
  config?: Config;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getLayout = (layout: string) => {
  switch (layout) {
    case "Authorized":
      return AuthorizedLayout;
    case "Unauthorized":
    default:
      return Layout;
  }
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const LayoutComponent = getLayout(Component.config?.Layout || "") ?? <></>;

  return (
    <Container disableGutters={Component.config?.disableGutters ?? false}>
      <IntlProvider locale='en' messages={intlEn} defaultLocale='en'>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </IntlProvider>
    </Container>
  );
};

export default MyApp;
