import React from "react";
import styles from "../styles/ContentSection.module.css";
import SponsorPitch from "./SponsorPitch";
import StudentPitch from "./StudentPitch";

const ContentSection = () => {
  return (
    <div className={styles.ContentSection}>
      <StudentPitch />
      {/* <SponsorPitch /> */}
    </div>
  );
};

export default ContentSection;
