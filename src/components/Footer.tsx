import React, { startTransition } from "react";
import styles from "../styles/Footer.module.css";
import iiitn from '../iiitN_logo.png';
import line from '../Line.png';
import tf from '../Group.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={iiitn.src} alt="iiitN" className={styles.logo} />
          <img src={line.src} alt="iiitN" className={styles.logo} />
          <img src={tf.src} alt="tf" className={styles.logo} />
        </div>
      <div className={styles.social_container}>
        <h3 className={styles.h3}>
          Social Media
        </h3>
        <a href="#"
        className={styles.youtube_social}>
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#"
        className={styles.facebook_social}>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className={styles.twitter_social}>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#"
        className={styles.instagram_social}>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
      <div className={styles.contact_address}>
        <div className={styles.contact}>
            <div className={styles.ts}>
                <h3 className={styles.h3}>Yash Kumar Sharma</h3>
                <p>Technical Secretary SAC
                    IIIT NAGPUR
                    ts@iiitn.ac.in
                    7011214319</p>
            </div>
            <div className={styles.gs}>
                <h3 className={styles.h3}>Aditya Pratap Singh Sengar</h3>
                <p>General Secretary SAC
                    IIIT NAGPUR
                    gs@iiitn.ac.in
                    9111391478</p>
            </div>
        </div>
        <div className={styles.address}>
            <h3 className={styles.h3}>Address:</h3>
            <p>Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, Village - Waranga,
                PO
                -
                Dongargaon(Butibori), Tahsil- Nagpur (Rural), District Nagpur, Maharashtra- 441108</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
