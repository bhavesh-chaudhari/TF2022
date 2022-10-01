import React, { ReactNode } from "react";
import NextImage from "next/image";
import styles from "../styles/BgWrapper.module.css";

interface Props {
  children?: ReactNode;
}

const BgWrapper = ({ children }: Props) => {
  return (
    <div className={styles["bg-wrapper"]}>
      <div className={styles["content-wrapper"]}>{children}</div>
      <div className={styles["stars-wrapper"]}>
        <div className={styles["star-image-container"]}>
          <NextImage
            className={styles["stars"]}
            alt="stars"
            layout="fill"
            src={
              "https://res.cloudinary.com/doraexp69/image/upload/v1664546187/tf2022/stars_bi7uho.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default BgWrapper;
