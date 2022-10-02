import type { NextPage } from "next";
import Hero from "../components/Hero";
import Head from "next/head";
import dynamic from "next/dynamic";
import format from "date-fns/format";
import Script from "next/script";

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
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Event",
    name: "Tantrafiesta 2022, IIIT Nagpur",
    startDate: format(new Date(2022, 9, 15, 0, 0, 0), "yyyy-MM-dd"),
    endDate: format(new Date(2022, 9, 16, 0, 0, 0), "yyyy-MM-dd"),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "IIIT Nagpur",
      address: {
        "@type": "PostalAddress",
        streetAddress: "IIIT Nagpur",
        addressLocality: "Nagpur",
        addressRegion: "Maharashtra",
        addressCountry: "India",
        postalCode: "441108",
      },
    },
    image:
      "https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png",
    description: `Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur. Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers. Tantrafiesta aims to provide a platform in order to establish a forum that will enable the exchange of knowledge, experience, and information related to a range of emerging technologies. This year, TantaFiesta is focusing on the use of greener technologies, and how utilizing greener technologies is the way forward.`,
    url: `https://tantrafiesta.in/`,
    performer: {
      "@type": "PerformingGroup",
      name: "TantraFiesta Participants",
    },
    organizer: {
      "@type": "Organization",
      name: "Tanrafiesta, IIIT Nagpur",
      url: "https://www.tantrafiesta.in/",
    },
    offers: {
      "@type": "Offer",
      price: "Free",
    },
  };

  return (
    <div>
      <Head>
        <title>TantraFiesta 2022 - IIIT Nagpur</title>
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
      <Script
        id={`tantrafiesta-2022-iiit-nagpur`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
};

export default Home;
