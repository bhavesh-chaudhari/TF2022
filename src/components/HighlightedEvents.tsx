import React from "react";
import styles from "../styles/HighlightedEvents.module.css";
import hackme from "../images/hackme.png";
import robo from "../images/robo-rumble.png";
import cf from "../images/codefiesta.png";

const HighlightedEvents = () => {
  return (
    <div className={styles["highlighted-events"]}>
      <h1 className={styles["heading"]}>EVENTS IN TF2022</h1>
      <div className={styles["underline"]}></div>
      <div className={styles["components"]}>
        <img src={hackme.src} alt="hackme" className={styles["logo"]} />
        <img src={robo.src} alt="robo-rumble" className={styles["logo"]} />
        <img src={cf.src} alt="cf" className={styles["logo"]} />
      </div>
    </div>
  );
};

export default HighlightedEvents;
