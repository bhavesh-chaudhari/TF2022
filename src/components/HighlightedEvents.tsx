import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import styles from "../styles/HighlightedEvents.module.css";
import hackme from "../images/hackme.png";
import robo from "../images/robo-rumble.png";
import cf from "../images/codefiesta.png";

const HighlightedEvents = () => {
  return (
    <div className={styles["highlighted-events"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className={"yellow-bottom"} >EVENTS IN TF2022</h2>
        </div>
        <div className={styles["components"]}>
          <Link href="/events/codefiesta" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={cf}
                className={styles["image"]}
                layout={"fill"}
                alt="CodeFiesta Organized by Dot Slash Community at TantraFiesta"
              />
            </a>
          </Link>
          <Link href="/events/hackme" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={hackme}
                className={styles["image"]}
                layout={"fill"}
                alt="Hackme Organized by Skills Nights Club at TantraFiesta"
              />
            </a>
          </Link>
          <Link href="/events/robo-rumble" passHref>
            <a className={styles["image-container"]}>
              <NextImage
                src={robo}
                className={styles["image"]}
                layout={"fill"}
                alt="Robo Rumble Organized by IoTics Club at TantraFiesta"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighlightedEvents;