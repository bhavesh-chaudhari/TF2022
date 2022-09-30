import React from "react";
import { format } from "date-fns";
import styles from "../../styles/event/EventTimeline.module.css";

const EventTimeline = ({ timeline }: { timeline: any }) => {
  const currentDate = new Date();

  return (
    <div id="timeline" className={styles["container"]}>
      <h2 className={styles["heading"]}>Timeline</h2>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <div className={styles["timeline"]}>
          <div className={styles["cards"]}>
            {timeline.map((item: any) => {
              // console.log(currentDate > new Date(item.date));
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
