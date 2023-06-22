import {
  CorporateContactJsonLd,
  DefaultSeo,
  LogoJsonLd,
  SocialProfileJsonLd,
} from "next-seo";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();
  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        defaultTitle="Blog | FibonacciKu"
        description="The best personal AI tutor for students and teachers. FibonacciKu is dedicated to all students in the world who need proper education for free"
        canonical="https://blog.fibonacciku.com"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: `https://blog.fibonacciku.com${router.asPath}`,
          siteName: "FibonacciKu",
          title: "FibonacciKu",
          description:
            "The best personal AI tutor for students and teachers. FibonacciKu is dedicated to all students in the world who need proper education for free",
          images: [
            {
              url: "https://blog.fibonacciku.com/og.png",
              width: 1203,
              height: 791,
              alt: "FibonacciKu",
            },
          ],
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <LogoJsonLd
        logo="https://blog.fibonacciku.com/logo.png"
        url="https://blog.fibonacciku.com"
      />
      <SocialProfileJsonLd
        type="Organization"
        name="FibonacciKu"
        url="https://blog.fibonacciku.com"
        sameAs={[
          "https://www.instagram.com/fibonacciku.id",
          "https://www.linkedin.com/company/fibonacciku",
        ]}
      />
      <CorporateContactJsonLd
        url="https://blog.fibonacciku.com"
        logo="https://blog.fibonacciku.com/logo.png"
        contactPoint={[
          {
            contactType: "Customer Support",
            email: "support@fibonacciku.com",
          },
          {
            contactType: "Sales",
            email: "sales@fibonacciku.com",
          },
          {
            contactType: "Information",
            email: "info@fibonacciku.com",
          },
        ]}
      />
    </>
  );
};

export default Meta;
