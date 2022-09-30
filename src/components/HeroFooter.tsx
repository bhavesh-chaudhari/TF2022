import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "../styles/HeroFooter.module.css";

const HeroFooter = () => {

  return (
    <div className={styles["footer"]}>
      <div className={styles["contact-us"]}>
        <p>Mail us at: </p>
        <a rel="noreferrer" href="mailto:ts@iiitn.ac.in">
          ts@iiitn.ac.in
        </a>
      </div>
      <div className={styles["social-handles"]}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/tantrafiesta"
        >
          <div className={styles["icon-container"]}>
            <FaInstagram className={styles["icon"]} />
          </div>
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/tf2k22">
          <div className={styles["icon-container"]}>
            <FaTwitter className={styles["icon"]} />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q"
        >
          <div className={styles["icon-container"]}>
            <FaYoutube className={styles["icon"]} />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/iiitntantra/"
        >
          <div className={styles["icon-container"]}>
            <FaFacebook className={styles["icon"]} />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/company/tantrafiesta-iiitn/"
        >
          <div className={styles["icon-container"]}>
            <FaLinkedin className={styles["icon"]} />
          </div>
        </a>
        <a
          className={styles["mobile-mail-icon"]}
          target="_blank"
          rel="noreferrer"
          href="mailto:ts@iiitn.ac.in"
        >
          <div className={styles["icon-container"]}>
            <FaEnvelope className={styles["icon"]} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroFooter;
