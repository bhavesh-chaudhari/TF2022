import React from "react";
import Image from "next/image";
import styles from "../../styles/event/EventDescription.module.css";

interface Props {
  name: string;
  imgPath: string;
  description: string;
  organizer: string;
  registrationLink: string;
}

const EventDescription = ({
  name,
  imgPath,
  description,
  organizer,
  registrationLink,
}: Props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1>{name}</h1>
      </div>
      <div className={styles["content"]}>
        <div className={styles["img"]}>
          <Image
            src={imgPath}
            layout="fill"
            alt={`${name} organized by ${organizer}`}
            draggable={"false"}
          ></Image>
        </div>
        <a
          className={styles["registration-link"]}
          href={registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          Register Now
        </a>
        <div className={styles["desc"]}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
