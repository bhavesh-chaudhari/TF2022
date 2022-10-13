import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import events from "../../data/eventsData";
import styles from "../../styles/EventsPageMain.module.css";
import BgWrapper from "../../components/BgWrapper";
import Head from "next/head";
import EventCard from "../../components/EventCard";

const HighlightedEvents = () => {
  return (
    <>
      <Head>
        <title>Events - TantraFiesta 2022</title>
        <meta
          name="description"
          content="Checkout the events in Tantrafiesta 2022. Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        />
        <meta
          name="keywords"
          content="events tantrafiesta, tf2022 events, tf2k22, hackme, robo rumble, codefiesta, designathon, iiitn tantrafiesta"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.in/" />
        <meta property="og:title" content="Events - Tantrafiesta 2022" />
        <meta
          property="og:description"
          content="Checkout the events in Tantrafiesta 2022. Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tantrafiesta.in/" />
        <meta property="twitter:title" content="Events - Tantrafiesta 2022" />
        <meta
          property="twitter:description"
          content="Checkout the events in Tantrafiesta 2022. Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>
      </Head>
      <BgWrapper>
        <div className={styles["highlighted-events"]}>
          <div className={styles["content"]}>
            <div className={styles["heading"]}>
              <h1 className={"yellow-bottom"}>EVENTS IN TF2022</h1>
            </div>
            <div className={styles["components"]}>
              {events.map((item) => {
                return (
                    item.imgPath ? <Link key={item.id} href={`/events/${item.path}`} passHref>
                    <a className={styles["image-container"]}>
                      <NextImage
                        src={item.imgPath}
                        className={styles["image"]}
                        layout={"fill"}
                        alt={`${item.name} Organized by ${item.organizer} at TantraFiesta 2022, Indian Institute of Information Technology Nagpur`}
                      />
                    </a>
                  </Link> : 
                  // <EventCard key={item.id} {...item} ></EventCard>
                  null
                );
              })}
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  );
};

export default HighlightedEvents;
