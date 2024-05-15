import { Html, Head, Main, NextScript } from "next/document";
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
