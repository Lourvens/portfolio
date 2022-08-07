import NextHead from 'next/head';

const Head = () => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    {/* <!-- Primary Meta Tags --> */}
    <title>Lourvens. | portfolio • Frontend Developer</title>
    <meta name="title" content="Lourvens. | portfolio • Frontend Developer" />
    <meta name="description" content="You want to create shapely, scalable and robust web application" />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lourvens-63a2lgqks-lourvens.vercel.app" />
    <meta property="og:title" content="Lourvens. | portfolio • Frontend Developer" />
    <meta property="og:description" content="You want to create shapely, scalable and robust web application" />
    <meta property="og:image" content="https://lourvens-63a2lgqks-lourvens.vercel.app/me.png" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://lourvens.vercel.app" />
    <meta property="twitter:title" content="Lourvens. | portfolio • Frontend Developer" />
    <meta property="twitter:description" content="You want to create shapely, scalable and robust web application" />
    <meta property="twitter:image" content="https://lourvens-63a2lgqks-lourvens.vercel.app/me.png" />
  </NextHead>
);

export default Head;
