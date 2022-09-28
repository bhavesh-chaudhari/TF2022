import React, { useState } from "react";
import styles from "../styles/TFinPast.module.css";

const TFinPast = () => {
  return (
    <div id="past-glimpse" className={styles["tf-in-past"]}>
      <h1 className={styles["heading"]}>TANTRAFIESTA IN PAST</h1>
      <div className={styles["underline"]} />
      <div className={styles["container"]}>
        <div className={styles["video"]}>
          <iframe
            className={styles["Video2"]}
            src="https://www.youtube.com/embed/0v4iftGneYk?autoplay=1"
            title="Glimpse of TF2K21 | IIIT Nagpur | Throwback"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles["content"]}>
          An eternal legacy, Tantrafiesta 2021, the annual flagship technical
          event of IIIT Nagpur provided a platform for the under-grad students
          to showcase their technical prowess. The entire event was a
          conglomeration of various innovative segments from enlightening
          speaker sessions to e-Sport tournaments spanning 9 days full of the
          hustle and bustle of competitions, comprising 27 events and
          enthusiastic participation of 4800+ participants.
        </div>
      </div>
    </div>
  );
};

export default TFinPast;
