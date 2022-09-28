import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import styles from "../styles/HighlightedEvents.module.css";
import hackme from "../images/hackme.png";
import designathon from "../images/designathon.png";
import cf from "../images/codefiesta.png";

const HighlightedEvents = () => {
  return (
    <div id="events" className={styles["highlighted-events"]}>
      <h1 className={styles["heading"]}>EVENTS IN TF2022</h1>
      <div className={styles["underline"]}></div>
      <div className={styles["components"]}>
        <NextLink
          href="/events/codefiesta"
          className={styles["logo-container"]}
        >
          <NextImage src={cf} className={styles["logo"]} alt="cf" />
        </NextLink>
        <NextLink href="/events/hackme" className={styles["logo-container"]}>
          <NextImage src={hackme} className={styles["logo"]} alt="hackme" />
        </NextLink>
        <NextLink
          href="/events/designathon"
          className={styles["logo-container"]}
        >
          <NextImage
            src={designathon}
            className={styles["logo"]}
            alt="robo-rumble"
          />
        </NextLink>
      </div>
    </div>
  );
};

export default HighlightedEvents;
