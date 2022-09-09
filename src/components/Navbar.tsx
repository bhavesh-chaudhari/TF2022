import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={styles.MainNav}>
        <div className={styles.elements}>
          <ul>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
