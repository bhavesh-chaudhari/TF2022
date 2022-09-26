import React, { ReactNode, useEffect } from "react";
import NextImage from "next/image";
import stars from "../../public/media/stars.png";
import earth from "../../public/media/earth.png";
import styles from "../styles/BgWrapper.module.css";

interface Props {
  children?: ReactNode;
}

const BgWrapper = ({ children }: Props) => {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["content-wrapper"]}>{children}</div>
      <div className={styles["earth-wrapper"]}>
        <NextImage className={styles["earth"]} src={earth} alt="earth" />
      </div>
      <div className={styles["stars-wrapper"]}>
        <div className={styles["star-image-container"]}>
          <NextImage className={styles["stars"]} alt="stars" src={stars}/>
        </div>
      </div>
    </div>
  );
};

export default BgWrapper;
