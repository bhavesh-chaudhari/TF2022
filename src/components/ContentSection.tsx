import React from "react";
import styles from "../styles/ContentSection.module.css";
import Highlights from "./Highlights";

const ContentSection = () => {
  return <div className={styles.ContentSection}>
    {/* {`${styles.class-name1} ${styles.class-name2}`} */}
    <Highlights/>
  </div>;
};

export default ContentSection;
