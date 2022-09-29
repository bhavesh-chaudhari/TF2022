import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import events from "../../data/eventsData";
import styles from "../../styles/EventsPageMain.module.css";
import BgWrapper from "../../components/BgWrapper";

const HighlightedEvents = () => {
  return (
    <BgWrapper>
      <div className={styles["highlighted-events"]}>
        <div className={styles["content"]}>
          <div className={styles["heading"]}>
            <h1 className={"yellow-bottom"}>EVENTS IN TF2022</h1>
          </div>
          <div className={styles["components"]}>
            {
              events.map(item=>{
                return (
                  <Link key={item.id} href={`/events/${item.path}`} passHref>
                    <a className={styles["image-container"]}>
                      <NextImage
                        src={item.imgPath}
                        className={styles["image"]}
                        layout={"fill"}
                        alt="CodeFiesta Organized by Dot Slash Community at TantraFiesta"
                      />
                    </a>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </BgWrapper>
  );
};

export default HighlightedEvents;