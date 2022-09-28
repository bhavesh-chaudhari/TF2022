import React from "react";
import NextImage from "next/image";
import styles from "../styles/HighlightedEvents.module.css";
import hackme from "../images/hackme.png";
import robo from "../images/robo-rumble.png";
import cf from "../images/codefiesta.png";

const HighlightedEvents = () => {
  return (
    <div id="events" className={styles["highlighted-events"]}>
      <h1 className={styles["heading"]}>EVENTS IN TF2022</h1>
      <div className={styles["underline"]}></div>
      <div className={styles["components"]}>
        <a href="/events/codefiesta" className={styles["logo-container"]}>
          <NextImage src={cf} className={styles["logo"]} alt="cf" />
        </a>
        <a href="/events/hackme" className={styles["logo-container"]}>
          <NextImage src={hackme} className={styles["logo"]} alt="hackme" />
        </a>
        <a href="/events/robo-rumble" className={styles["logo-container"]}>
          <NextImage src={robo} className={styles["logo"]} alt="robo-rumble" />
        </a>
      </div>
    </div>
  );
};

export default HighlightedEvents;
