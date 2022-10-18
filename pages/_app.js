import '../styles/globals.css'

import { NextUIProvider } from '@nextui-org/react';
import { appWithTranslation } from 'next-i18next';

import { Layout } from '../components/Layout';
import lightTheme from '../themes/lightTheme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default appWithTranslation(MyApp)
