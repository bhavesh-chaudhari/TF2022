import React from "react";
import Image from "next/image";
import styles from "../styles/Temp.module.css";

const Temp = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["logo"]}>
          <Image
            src={"/favicons/tantrafiesta-logo.png"}
            alt="tantrafiesta logo"
            layout="fill"
          ></Image>
        </div>
        <div className={styles["heading"]}>
          <h1>TantraFiesta 2022</h1>
        </div>
      </div>
      <div className={styles["note"]}>
        <h2>Coming Soon !</h2>
      </div>
    </div>
  );
};

export default Temp;
