import React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import tfLogo from "../../public/favicons/tantrafiesta-logo.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles["navbar-wrapper"]}>
      <div className={styles["navbar"]}>
        <div className={styles["branding"]}>
          <NextImage
            className={styles["branding-img"]}
            src={tfLogo}
            alt="TantraFiesta logo"
            width={40}
            height={40}
          />
          <h1 className={styles["branding-text"]}> TantraFiesta 2022</h1>
        </div>
        <div className={styles["navbar-links"]}>
          <div>
            <NextLink href="/">
              <a className={styles["navbar-link"]}>Home</a>
            </NextLink>
          </div>
          <div>
            <NextLink href="/">
              <a className={styles["navbar-link"]}>About TF</a>
            </NextLink>
          </div>
          <div>
            <NextLink href="/">
              <a className={styles["navbar-link"]}>Events</a>
            </NextLink>
          </div>
          <div>
            <NextLink href="/">
              <a className={styles["navbar-link"]}>Timeline</a>
            </NextLink>
          </div>
        </div>
      </div>

      <div className={styles["yellow-line"]} />
      <div className={styles["green-line"]} />
    </div>
  );
};

export default Navbar;
