import type { NextPage } from "next";
import Hero from "../components/Hero";
import Head from "next/head";
import dynamic from "next/dynamic";

const AboutTantra = dynamic(() => {
  return import("../components/AboutTantra");
});

const BgWrapper = dynamic(() => {
  return import("../components/BgWrapper");
});

const HighlightedEvents = dynamic(() => {
  return import("../components/HighlightedEvents");
});

const TFinPast = dynamic(() => {
  return import("../components/TFinPast");
});

const VenueAndForm = dynamic(() => {
  return import("../components/VenueAndForm");
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tantrafiesta - 2022</title>
        <meta
          name="description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur. Tantrafiesta aims to provide a platform in order to establish a forum that will enable the exchange of knowledge, experience, and information related to a range of emerging technologies."
        />
        <meta
          name="keywords"
          content="Tantrafiesta 2022, tf2022, tf2k22, Tantrafiesta IIIT Nagpur, IIIT Nagpur's Technical fest, Events in Nagpur, iiit tech fest, tantrafiesta website"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.in/" />
        <meta property="og:title" content="Tantrafiesta - 2022" />
        <meta
          property="og:description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur. "
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tantrafiesta.in/" />
        <meta property="twitter:title" content="Tantrafiesta - 2022" />
        <meta
          property="twitter:description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur. "
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>
      </Head>
      <>
        <Hero />
        <BgWrapper>
          <AboutTantra />
          <HighlightedEvents />
          <TFinPast />
          <VenueAndForm></VenueAndForm>
        </BgWrapper>
      </>
    </div>
  );
};

export default Home;
