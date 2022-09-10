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
            <img src={iiitn.src} alt="iiitN" className={styles.logo1}/>
            <img src={line.src} alt="line"className={styles.logo1}/>
            <img src={tf.src} alt="tf" className={styles.logo1}/>
        </div>
      <div className={styles.social_container}>
        <h3 className={styles.h3}>
          Social Media
        </h3>
        <a href="#"
        className={styles.social}>
        <FontAwesomeIcon icon={faYoutube} size="2x" className={styles.youtube}/>
        </a>
        <a href="#"
          className={styles.social}>
          <FontAwesomeIcon icon={faFacebook} size="2x" className={styles.facebook}/>
        </a>
        <a href="#" className={styles.social}>
          <FontAwesomeIcon icon={faTwitter} size="2x" className={styles.twitter}/>
        </a>
        <a href="#"
          className={styles.social}>
          <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.instagram}/>
        </a>
      </div>
      <div className={styles.contact_address}>
        <div className={styles.contact}>
            <div className={styles.ts}>
                <h3 className={styles.h3}>Yash Kumar Sharma</h3>
                <p>Technical Secretary SAC</p>
                <p>IIIT NAGPUR</p>
                <p>ts@iiitn.ac.in</p>
                <p>7011214319</p>
            </div>
            <div className={styles.gs}>
                <h3 className={styles.h3}>Aditya Pratap Singh Sengar</h3>
                <p>General Secretary SAC</p>
                <p>IIIT NAGPUR</p>
                <p>gs@iiitn.ac.in</p>
                <p>9111391478</p>
            </div>
        </div>
        <div className={styles.address}>
            <h3 className={styles.h3}>Address:</h3>
            <p> Survey No. 140,141/1 behind Br. Sheshrao </p> 
            <p> Wankhade Shetkari Sahkari Soot Girni, </p>
            <p> Village - Waranga, PO - </p>
            <p> Dongargaon(Butibori), Tahsil- Nagpur </p>
            <p> (Rural), District Nagpur, Maharashtra- </p> 
            <p> 441108 </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
