import React from "react";
import styles from "../styles/HighlightedSpeakers.module.css";
import hackme from "../images/hackme.png";
import robo from "../images/robo-rumble.png";

const HighlightedSpeakers = () => {
  return (<div className={styles["highlighted-events"]}>
    <div className={styles.header}>
      <div className={styles.h1}><h1>SPEAKERS AT TF2022</h1></div>
      <div className={styles.line}></div>
    </div>
    <div className={styles.components}>
      <div className={styles.img1}>
        <img src={hackme.src} alt="hackme" className={styles.logo}/>
      </div>
      <div className={styles.img2}>
        <img src={robo.src} alt="robo-rumble" className={styles.logo}/>
      </div>
      <div className={styles.img3}>
        <img src={hackme.src} alt="hackme" className={styles.logo}/>
      </div>
    </div>

  </div>);
};

export default HighlightedSpeakers;
