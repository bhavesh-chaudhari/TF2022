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
      <div className={styles["stars-wrapper"]}>
        <NextImage src={stars} />
      </div>
      <div className={styles["content-wrapper"]}>{children}</div>
      <div className={styles["earth-wrapper"]}>
        <NextImage src={earth} />
      </div>
    </div>
  );
};

export default BgWrapper;
