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
      <h1 className={styles["heading"]}>{name}</h1>
      <div className={styles["underline"]} />
      <div className={styles["content"]}>
        <div>
          <Image
            className={styles["img"]}
            src={imgPath}
            height={1800}
            width={1800}
            alt={`${name} organized by ${organizer}`}
            draggable={"false"}
          ></Image>
        </div>
        <div className={styles["desc"]}>
          <p>{description}</p>
        </div>
      </div>
      <a
        className={styles["registration-link"]}
        href={registrationLink}
        target="_blank"
        rel="noreferrer"
      >
        Register
      </a>
    </div>
  );
};

export default EventDescription;
