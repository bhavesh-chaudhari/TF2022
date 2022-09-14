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
import { useRouter } from "next/router";

const HeroFooter = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("mailto:ts@iiitn.ac.in");
  };

  return (
    <div className={styles["footer"]}>
      <div className={styles["contact-us"]} onClick={handleClick}>
        <p> Contact Us</p>
        <div className={styles["icon-container"]}>
          <FaEnvelope className={styles["mail-icon"]} />
        </div>
      </div>
      <div className={styles["social-handles"]}>
        <p> Follow Us </p> |
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/tantrafiesta?igshid=YmMyMTA2M2Y="
        >
          <div className={styles["icon-container"]}>
            <FaInstagram className={styles["icon"]} />
          </div>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/tf2k22?t=wrL0i1d3EBUTf7auZqO_qQ&s=09"
        >
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
      </div>
    </div>
  );
};

export default HeroFooter;
