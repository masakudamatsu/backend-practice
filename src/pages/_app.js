import Head from 'next/head';

import GlobalStyle from 'src/utils/GlobalStyle';

const title = 'Template Next.js Site';
const description = 'Template code for Next.js sites';
const url = 'https://github.com/masakudamatsu/nextjs-template';
const webfont = {
  server: 'https://fonts.gstatic.com',
  stylesheet:
    'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap',
}; // See https://csswizardry.com/2020/05/the-fastest-google-fonts/
const favicon = {
  svg: '/logo.svg',
  ico: '/favicon.ico',
  appleTouch: 'apple-touch-icon.png',
  safariPinnedTab: '/safari-pinned-tab.svg',
  color: '#4a4a4a',
}; // See https://dev.to/masakudamatsu/favicon-nightmare-how-to-maintain-sanity-3al7

const structuredData = {
  applicationCategory: 'DesignApplication',
  genre: 'color',
  softwareVersion: '1.0.0',
}; // See https://developers.google.com/search/docs/data-types/software-app#softwareapplication

const socialMediaLink = {
  imageUrl: '',
  imageFileType: 'image/png',
  imageHeight: '630',
  imageWidth: '1200',
  imageAltText: '',
  createrTwitterId: '',
}; // See https://masakudamatsu.medium.com/webdev-survey-meta-tags-for-sharing-the-link-on-facebook-and-twitter-b597a735d372

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* This tag would cause an error if it were in _document.js. See https://github.com/vercel/next.js/blob/master/errors/no-document-viewport-meta.md */}
        <title>{title}</title> <meta name="description" content={description} />
        {/* If a single-page app; otherwise add a title to each page instead */}{' '}
        {/*** Web font loading ***/}
        <link rel="preconnect" href={webfont.server} />
        {/* For faster web font loading. */}
        <link rel="preload" as="style" href={webfont.stylesheet} />
        {/* For faster web font loading. */}
        <link
          rel="stylesheet"
          href={webfont.stylesheet}
          media="print"
          onload="this.media='all'"
        />
        {/* For actually reading the @font-face stylesheet. It's also a fallback for browsers incompatible with <link rel="preload" />. */}
        <noscript>
          <link rel="stylesheet" href={webfont.stylesheet} />
        </noscript>
        {/* Fallback for JavaScript-disabled browsers.  */}
        {/*** Favicon ***/}
        <link rel="icon" type="image/svg+xml" href={favicon.svg} />
        {/* SVG-favicon-compatible browsers */}
        <link rel="alternate icon" href={favicon.ico} />
        {/* SVG-favicon-incompatible browsers */}
        <link rel="apple-touch-icon" href={favicon.appleTouch} />
        {/*  iOS Home Screen */}
        <meta name="apple-mobile-web-app-title" content={title} />
        {/*  Android Chrome */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content={title} />
        {/*  MacOS Safari pinned tab / touch bar */}
        <link
          rel="mask-icon"
          href={favicon.safariPinnedTab}
          color={favicon.color}
        />
        {/* Android Chrome tab color */}
        <meta name="theme-color" content={favicon.color} />
        {/*** Structured data ***/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'WebApplication',
              name: title,
              url: url,
              applicationCategory: structuredData.applicationCategory,
              genre: structuredData.genre,
              browserRequirements: 'Requires JavaScript. Requires HTML5.',
              softwareVersion: structuredData.softwareVersion,
              operatingSystem: 'All',
              offers: {
                '@type': 'Offer',
                price: '0',
              },
            }),
          }}
          key="structured-data"
        />
        {/*** Styling the link on social media ***/}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialMediaLink.imageUrl} />
        <meta
          property="og:image:height"
          content={socialMediaLink.imageHeight}
        />
        <meta property="og:image:width" content={socialMediaLink.imageWidth} />
        <meta name="twitter:image:alt" content={socialMediaLink.imageAltText} />
        <meta
          property="og:image:type"
          content={socialMediaLink.imageFileType}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={socialMediaLink.createrTwitterId}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />{' '}
    </>
  );
}
