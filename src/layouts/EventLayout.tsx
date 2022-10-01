import React, { ReactNode } from "react";
import styles from "../styles/event/EventLayout.module.css";
import BgWrapper from "../components/BgWrapper";
import Head from "next/head";
import { format } from "date-fns";
import Script from "next/script";
import { useRouter } from "next/router";

interface EventProps {
  children: ReactNode;
  event: any;
}

const EventLayout = ({ children, event }: EventProps) => {
  const { meta } = event;

  const router = useRouter();

  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: format(new Date(event.registration_deadline[0]), "yyyy-MM-dd"),
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
    image: event.imgPath,
    description: event.description,
    url: `https://tantrafiesta.in/${router.asPath}`,
    performer: {
      "@type": "Organization",
      name: event.organizer,
    },
  };

  return (
    <>
      <Head>
        <title>{event.name} - Tantrafiesta 2022</title>
        <meta name="description" content={meta.description} />
        <meta
          name="keywords"
          content={`${meta.keywords}, ${event.name} Tantrafiesta, #tf2k22, tf2022, tantrafiesta events`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.in/" />
        <meta
          property="og:title"
          content={`${event.name} - Tantrafiesta 2022`}
        />
        <meta property="og:description" content={meta.description}></meta>
        <meta property="og:image" content={meta.image}></meta>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tantrafiesta.in/" />
        <meta
          property="twitter:title"
          content={`${event.name} - Tantrafiesta 2022`}
        />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image}></meta>
      </Head>
      <BgWrapper>
        <div className={styles["container"]}>{children}</div>
      </BgWrapper>
      <Script
        id={`event-${event.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default EventLayout;
