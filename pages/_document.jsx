import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" /> */}
        <meta name="application-name" content="Camila Osorio F" />
        <meta name="description" content="camila osorio, actress." />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="canonical" href="https://camilaosoriof.vercel.app/" />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:url"
          content="https://camilaosoriof.vercel.app/"
        />
        <meta property="twitter:title" content="Camila Osorio F - Actress" />
        <meta
          property="twitter:description"
          content="camila osorio, actress."
        />
        <meta
          property="twitter:image"
          content="https://camilaosoriof.vercel.app/images/graph-header-title.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Camila Osorio F - Actress" />
        <meta property="og:description" content="camila osorio, actress." />
        <meta property="og:site_name" content="Camila Osorio F - Actress" />
        <meta property="og:url" content="https://camilaosoriof.vercel.app/" />
        <meta
          property="og:image"
          content="https://camilaosoriof.vercel.app/images/graph-header.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Camila Osorio F" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#E26262" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFF" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
