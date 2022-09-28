import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import events from "../../data/eventsData";
import styles from "../../styles/event/Events.module.css";
import BgWrapper from "../../components/BgWrapper";

const index = () => {
  return (
    <BgWrapper>
      <div className={styles["container"]}>
        <h1 className={styles["heading"]}>Events under TF2022</h1>
        <div className={styles["underline"]} />
        <ul className={styles["event-list"]}>
          {events.map((item) => {
            return (
              <li key={item.id} className={styles["logo-container"]}>
                <Link href={`/events/${item.path}`}>
                  <NextImage
                    src={item.imgPath}
                    className={styles["logo"]}
                    height={300}
                    width={300}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </BgWrapper>
  );
};

export default index;
