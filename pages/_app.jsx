import "../styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from "next-i18next";
import i18nextConfig from "../next-i18next.config";

import { Layout } from "../components/Layout";
import Transition from "../components/Transition";
import lightTheme from "../themes/lightTheme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={lightTheme}>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </NextUIProvider>
  );
};

export default appWithTranslation(MyApp, i18nextConfig);
