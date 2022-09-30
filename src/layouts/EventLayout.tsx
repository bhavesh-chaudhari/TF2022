import React, { ReactNode } from "react";
import styles from "../styles/event/EventLayout.module.css";
import BgWrapper from "../components/BgWrapper";
import Head from "next/head";

interface EventProps {
  children: ReactNode;
  event: any;
}

const EventLayout = ({ children, event }: EventProps) => {
  const { meta } = event;

  return (
    <>
      <Head>
        <title>{event.name} - Tantrafiesta 2022</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
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
    </>
  );
};

export default EventLayout;
