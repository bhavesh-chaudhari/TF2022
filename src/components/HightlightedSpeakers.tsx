import React from "react";
import styles from "../styles/HighlightedSpeakers.module.css";

const HighlightedSpeakers = () => {
  return (
    <div className={styles["highlighted-speakers"]}>
      <h1 className={styles["heading"]}>SPEAKERS AT TF2022</h1>
      <div className={styles["underline"]}></div>
      <div className={styles["components"]}></div>
    </div>
  );
};

export default HighlightedSpeakers;
