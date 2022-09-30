import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import styles from "../styles/HighlightedEvents.module.css";

const HighlightedEvents = () => {

  return (
    <div className={styles["highlighted-events"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className={"yellow-bottom"}>EVENTS IN TF2022</h2>
          <div className={styles["view-all"]}>
            <Link href="/events" passHref>
              <a>View All →</a>
            </Link>
          </div>
        </div>
        <div className={styles["components"]}>
          <div data-aos={"fade-right"} data-aos-duration="1000">
            <Link href="/events/codefiesta" passHref>
              <a className={styles["image-container"]}>
                <NextImage
                  src={
                    "https://res.cloudinary.com/doraexp69/image/upload/v1664543140/tf2022/tantrafiesta-codefiesta_ignxkf.png"
                  }
                  layout={"fill"}
                  alt="CodeFiesta Organized by Dot Slash Community at TantraFiesta"
                />
              </a>
            </Link>
          </div>
          <div
            data-aos={"fade-right"}
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Link href="/events/hackme" passHref>
              <a className={styles["image-container"]}>
                <NextImage
                  src={
                    "https://res.cloudinary.com/doraexp69/image/upload/v1664543139/tf2022/tantrafiesta-hackme_g9zaef.png"
                  }
                  className={styles["image"]}
                  layout={"fill"}
                  alt="Hackme Organized by Skills Nights Club at TantraFiesta"
                />
              </a>
            </Link>
          </div>
          <div
            data-aos={"fade-right"}
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Link href="/events/robo-rumble" passHref>
              <a className={styles["image-container"]}>
                <NextImage
                  src={
                    "https://res.cloudinary.com/doraexp69/image/upload/v1664543141/tf2022/tantrafiesta-robo-rumble_nz6rxi.png"
                  }
                  className={styles["image"]}
                  layout={"fill"}
                  alt="Robo Rumble Organized by IoTics Club at TantraFiesta"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedEvents;