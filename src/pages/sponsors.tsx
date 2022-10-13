import React from 'react'
import Head from 'next/head';
import SponsorsMain from '../components/SponsorsMain';
import BgWrapper from '../components/BgWrapper';

const sponsors = () => {
  return (
    <>
      <Head>
        <title>Sponsors - TantraFiesta 2022</title>
        <meta
          name="description"
          content="TantraFiesta is to be conducted on 15th and 16th October 2022. Meet our sponsors who are contributing towards making TantraFiesta 2022 a huge success."
        />
        <meta
          name="keywords"
          content="Tantrafiesta sponsors, Tantrafiesta 2022, tf2022, tf2k22, IIIT Nagpur, tantrafiesta website"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.in/sponsors" />
        <meta property="og:title" content="Sponsors - TantraFiesta 2022" />
        <meta
          property="og:description"
          content="TantraFiesta is to be conducted on 15th and 16th October 2022. Meet our sponsors who are contributing towards making TantraFiesta 2022 a huge success."
        ></meta>
        <meta
          property="og:image"
          content={`https://www.tantrafiesta.in/api/og?title=${encodeURIComponent(
            "Our Sponsors"
          )}&path=${encodeURIComponent("www.tantrafiesta.in/sponsors")}`}
        ></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tantrafiesta.in/sponsors"
        />
        <meta property="twitter:title" content="Sponsors - TantraFiesta 2022" />
        <meta
          property="twitter:description"
          content="TantraFiesta is to be conducted on 15th and 16th October 2022. Meet our sponsors who are contributing towards making TantraFiesta 2022 a huge success."
        />
        <meta
          property="twitter:image"
          content={`https://www.tantrafiesta.in/api/og?title=${encodeURIComponent(
            "Our Sponsors"
          )}&path=${encodeURIComponent("www.tantrafiesta.in/sponsors")}`}
        ></meta>
      </Head>
      <BgWrapper>
        <SponsorsMain></SponsorsMain>
      </BgWrapper>
    </>
  );
}

export default sponsors