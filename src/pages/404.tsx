import React from "react";
import styles from "../styles/404.module.css"
import Link from "next/link";

const index = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h1>
            <span>4</span>0<span>4</span>
          </h1>
        </div>
        <div className={styles["back"]}>
          <Link href={"/"} passHref>
            <a>Back To Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
