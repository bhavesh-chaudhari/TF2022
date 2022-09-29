import React from "react";
import styles from "../styles/HighlightedSpeakers.module.css";
import hackme from "../images/hackme.png";
import robo from "../images/robo-rumble.png";
import cf from "../images/codefiesta.png";

const HighlightedSpeakers = () => {
  return (
    <div className={styles["highlighted-speakers"]}>
      <h1 className={styles["heading"]}>SPEAKERS AT TF2022</h1>
      <div className={styles["underline"]}></div>
      <div className={styles["components"]}>
        {/* <img src={hackme.src} alt="hackme" className={styles["logo"]} />
        <img src={robo.src} alt="robo-rumble" className={styles["logo"]} />
        <img src={cf.src} alt="cf" className={styles["logo"]} /> */}
      </div>
    </div>
  );
};

export default HighlightedSpeakers;
