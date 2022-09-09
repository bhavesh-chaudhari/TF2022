import React from "react";
import styles from "../styles/ContentSection.module.css";
import StudentPitch from "./StudentPitch";

const ContentSection = () => {
  return(
    <div className={styles.ContentSection}>
      <StudentPitch />
    </div>
  );
};

export default ContentSection;
