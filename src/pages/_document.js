import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "./GA";
const GA_TRACKING_ID = "G-E0KSY2DGCX";

const stores = [
  {selected:"taos"}
]
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="https://use.typekit.net/tfg1djo.css"></link>
      <link
            rel="preload"
            href="VaultAlarm-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

      </Head>
      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
