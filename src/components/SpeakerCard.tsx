import React from "react";
import styles from "../styles/SpeakerCard.module.css"
import Image from"next/image"
import Pattern from "./svgs/Pattern"

interface Props {
  id: number;
  name: string;
  type: string;
  organizer: string;
  headline: string;
  designation: string;
  startTime: Date;
  endTime: Date;
  venue: string;
  imgPath: string;
  imgSizes: {
    section: number[];
    page: number[];
  };
}

const SpeakerCard = (props: Props) => {
  const { id, name, designation, imgPath, imgSizes } = props;

  return (
    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay={id*80}  className={styles["container"]}>
      <div className={styles["media"]}>
        <div className={`${styles["image"]} ${styles[`speaker-${id}`]}`}>
          <Image
            width={imgSizes.section[0]}
            height={imgSizes.section[1]}
            alt={`${name} is ${designation} at TantraFiesta 2022`}
            src={imgPath}
          ></Image>
        </div>
        <Pattern></Pattern>
      </div>
      <div className={styles["content"]}>
        <div className={styles["name"]}>
          <h4>{name}</h4>
        </div>
        <div className={styles["designation"]}>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
