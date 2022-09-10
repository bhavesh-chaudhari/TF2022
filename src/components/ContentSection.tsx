import React from "react";
import styles from "../styles/ContentSection.module.css";

const ContentSection = () => {
  return <div className={styles.ContentSection}>

  <div id="1" className={styles.aboutSection}>
  ABOUT {/* remove this line */}
  {/* ADD ABOUT COMPONENT HERE */}
  </div>

  <div id="2" className={styles.highlightsSection}>
  TEST HIGHTLIGHTS{/* remove this line */}
  {/* ADD THE HIGHLIGHTS COMPNONENT HERE */}
  </div>
  
 <div id="3" className={styles.studentSection}>
  STUDENT MESSAGE{/* remove this line */}
  {/* ADD THE STUDENT MESSAGE COMPNONENT HERE */}
  </div>

  <div id="4" className={styles.sponsorSection}>
  Sponsor MESSAGE{/* remove this line */}
  {/* ADD THE SPONSOR MESSAGE COMPNONENT HERE */}
  </div>

  <div id="5" className={styles.teamSection}>
  TEAM{/* remove this line */}
  {/* ADD THE TEAM SECTION COMPNONENT HERE */}
  </div>

  </div>
};

export default ContentSection;
