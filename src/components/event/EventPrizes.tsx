import React from "react";
import styles from "../../styles/event/EventPrizes.module.css";

const EventPrizes = ({ prizes }: { prizes: string[] }) => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["heading"]}>Prizes</h2>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <ul>
          {prizes.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {/* <span>{index + 1}</span> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventPrizes;
