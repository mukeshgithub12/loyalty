import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/zen_ui.css" />
        <link rel="stylesheet" href="assets/css/structureV3.css" />
      </Head>
      <body>
        <Main/>
        <NextScript />
        <Script src="assets/js/vendor-all.min.js" />
        <Script src="assets/js/plugins/bootstrap.min.js" />
        <Script src="assets/js/pcoded.min.js"/>
      </body>
    </Html>
  )
}