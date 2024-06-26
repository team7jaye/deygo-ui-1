import Head from "next/head";

interface SEOProps {
  prefix?: string;
  suffix?: string;
  description?: string;
}

const SEO = ({
  prefix,
  suffix,
  description = "Deygo.",
}: SEOProps) => {
  const seo = {
    description: description,
    // url: `https://deygo.org${path}`,
    title: `${prefix ? prefix + " - " : ""} Deygo ${
      suffix ? " - " + suffix : ""
    }`,
    image: "/LogoIcon.svg",
    twitterUsername: "",
    keywords: "deygo, travels, Business,tour,",
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
      <title>{seo.title}</title>
      <meta name="keywords" content={seo.keywords} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* <meta property="og:url" content={seo.url} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:site" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};

export default SEO;
