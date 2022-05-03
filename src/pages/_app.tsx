import Container from "@mui/material/Container";
import AuthorizedLayout from "../modules/Layout/AuthorizedLayout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import intlEn from "../i18n/en.json";
import Layout from "../modules/Layout";
import { ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { useCustomTheme } from "utils/hooks/useTheme";
import "../style.css";
import { StyledEngineProvider } from "@mui/material";

interface Config {
  Layout?: string;
  disableGutters?: boolean;
  Theme?: ThemeOptions;
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
  const theme = useCustomTheme(Component.config?.Theme);
  return (
    <Container disableGutters={Component.config?.disableGutters ?? false}>
      <StyledEngineProvider injectFirst>
        <IntlProvider locale='en' messages={intlEn} defaultLocale='en'>
          <ThemeProvider theme={theme}>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </ThemeProvider>
        </IntlProvider>
      </StyledEngineProvider>
    </Container>
  );
};

export default MyApp;
