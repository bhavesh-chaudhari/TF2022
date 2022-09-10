import React from "react";
import styles from "../styles/ContentSection.module.css";
import AboutUs from "./aboutUs";

const ContentSection = () => {
  return (
    <div className={styles.ContentSection}>
      <AboutUs />
    </div>
  );
};

export default ContentSection;
