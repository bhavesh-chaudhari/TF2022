import React from "react";
import styles from "../styles/EventCard.module.css";

const EventCard = (item: any) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}></div>
    </div>
  );
};

export default EventCard;
