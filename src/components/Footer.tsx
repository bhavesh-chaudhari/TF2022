import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["logo-container"]}>
        <div className={styles["logos"]}>
          <NextLink href={"/"} passHref>
            <a className={styles["footer-logo"]}>
              <div className={styles["img"]}>
                <NextImage
                  src="/media/logo.png"
                  alt="Tantrafiesta Logo"
                  layout="fill"
                ></NextImage>
              </div>
              {/* <p>TantraFiesta 2022</p> */}
            </a>
          </NextLink>
          <p>Proudly Presented By</p>
          {/* <div className={styles["vl"]} /> */}
          <NextLink href={"https://www.iiitn.ac.in/"} passHref>
            <a className={styles["footer-logo"]}>
              <div className={`${styles["img"]} ${styles["iiitn-logo"]}`}>
                <NextImage
                  src="/media/iiitn.png"
                  alt="IIITN Logo"
                  layout="fill"
                ></NextImage>
              </div>
              <p>IIIT Nagpur</p>
            </a>
          </NextLink>
        </div>
      </div>
      <div className={styles["contact-container"]}>
        <div className={styles["contacts"]}>
          <div className={styles["contact"]}>
            <h3 className={styles["title"]}>General Secretary</h3>
            <p> Aditya Pratap Singh Sengar</p>
            <a rel="noreferrer" href="mailto:gs@iiitn.ac.in">
              gs@iiitn.ac.in
            </a>
            <p> +91 91113 91478</p>
          </div>
          <div className={styles["contact"]}>
            <h3 className={styles["title"]}>Technical Secretary</h3>
            <p> Yash Kumar Sharma</p>
            <a rel="noreferrer" href="mailto:ts@iiitn.ac.in">
              ts@iiitn.ac.in
            </a>
            <p> +91 70112 14319</p>
          </div>
        </div>
      </div>
      <div className={styles["socials-container"]}>
        <div className={styles["social-handles"]}>
          <a
            className={styles["link"]}
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/tantrafiesta"
          >
            <div className={styles["icon-container"]}>
              <FaInstagram className={styles["icon"]} />
            </div>
            <p className={styles["icon-text"]}>Instagram</p>
          </a>
          <a
            className={styles["link"]}
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/tf2k22"
          >
            <div className={styles["icon-container"]}>
              <FaTwitter className={styles["icon"]} />
            </div>
            <p className={styles["icon-text"]}>Twitter</p>
          </a>
          <a
            className={styles["link"]}
            target="_blank"
            rel="noreferrer"
            href="https://youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q"
          >
            <div className={styles["icon-container"]}>
              <FaYoutube className={styles["icon"]} />
            </div>
            <p className={styles["icon-text"]}>YouTube</p>
          </a>
          <a
            className={styles["link"]}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/iiitntantra/"
          >
            <div className={styles["icon-container"]}>
              <FaFacebook className={styles["icon"]} />
            </div>
            <p className={styles["icon-text"]}>Facebook</p>
          </a>
          <a
            className={styles["link"]}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/tantrafiesta-iiitn/"
          >
            <div className={styles["icon-container"]}>
              <FaLinkedin className={styles["icon"]} />
            </div>
            <p className={styles["icon-text"]}> LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
