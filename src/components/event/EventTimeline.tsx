import React from "react";
import { format } from "date-fns";
import styles from "../../styles/event/EventTimeline.module.css";

interface Props {
  timeline: [
    {
      id: number;
      title: string;
      date: Date;
      start?: Date;
      end?: Date;
    }
  ];
}

const EventTimeline = ({ timeline }: Props): JSX.Element => {
  const currentDate = new Date();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="timeline"
      className={styles["container"]}
    >
      <h2 className={styles["heading"]}>Timeline</h2>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <div className={styles["timeline"]}>
          <div className={styles["cards"]}>
            {timeline.map((item) => {
              return (
                <div
                  className={
                    currentDate > new Date(item.date)
                      ? `${styles["card"]} ${styles["over"]}`
                      : styles["card"]
                  }
                  key={item.id}
                >
                  <h3>{item.title}</h3>
                  <p>{format(new Date(item.date), "do MMMM yyyy")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
