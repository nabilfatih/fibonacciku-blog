import { DocumentProps, Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale = props.__NEXT_DATA__.locale;

  return (
    <Html lang={currentLocale ? currentLocale : "en"}>
      <Head />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        data-ad-client="ca-pub-2206813441002095"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
