import React from "react";
import styles from "../styles/ContentSection.module.css";
import AboutUs from "./AboutUs";

const ContentSection = () => {
  return (
    <div className={styles.ContentSection}>
      <AboutUs />
    </div>
  );
};

export default ContentSection;
