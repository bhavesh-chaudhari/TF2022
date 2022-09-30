import React from "react";
import styles from "../../styles/event/EventPrizes.module.css";

const EventPrizes = ({ prizes }: { prizes: string[] }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      id="prizes"
      className={styles["container"]}
    >
      <div className={styles["heading"]}>
        <h2>Prizes</h2>
      </div>
      <div className={styles["content"]}>
        <ul>
          {prizes.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <span>{index + 1}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventPrizes;
