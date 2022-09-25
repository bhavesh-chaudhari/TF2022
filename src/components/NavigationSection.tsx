import React, { useState } from "react";
import styles from "../styles/NavigationSection.module.css";
import Navbar from "./Navbar";

const NavigationSection = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className={styles.NavigationSection}>
      <>
        <div className={styles.mainNav}>
          <div className={styles.elements}>
            <ul>
              <li
                className={styles.links}
                id="About"
                style={{
                  color: isActive == 1 ? "#2b9348" : "#ffffff",
                  fontSize: isActive == 1 ? "2vw" : "1.5vw",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive(1);
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li
                className={styles.links}
                id="Pitch"
                style={{
                  color: isActive == 2 ? "#2b9348" : "#ffffff",
                  fontSize: isActive == 2 ? "2vw" : "1.5vw",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive(2);
                  }}
                >
                  HIGHLIGHTS
                </a>
              </li>
              <li
                className={styles.links}
                id="mfs"
                style={{
                  color: isActive == 3 ? "#2b9348" : "#ffffff",
                  fontSize: isActive == 3 ? "2vw" : "1.5vw",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive(3);
                  }}
                >
                  MESSAGE FOR <br /> STUDENTS{" "}
                </a>
              </li>
              <li
                className={styles.links}
                id="mfsn"
                style={{
                  color: isActive == 4 ? "#2b9348" : "#ffffff",
                  fontSize: isActive == 4 ? "2vw" : "1.5vw",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive(4);
                  }}
                >
                  MESSAGE FOR <br /> SPONSORS{" "}
                </a>
              </li>
              <li
                className={styles.links}
                id="Team"
                style={{
                  color: isActive == 5 ? "#2b9348" : "#ffffff",
                  fontSize: isActive == 5 ? "2vw" : "1.5vw",
                }}
              >
                <a
                  href="#"
                  onClick={() => {
                    setIsActive(5);
                  }}
                >
                  TEAM
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.maincontainer}>
            <div className={styles.container}></div>
            <div className={styles.circles}>
              <div
                className={styles.circle1}
                style={{ backgroundColor: isActive == 1 ? "green" : "#ffffff" }}
              >
                <div
                  className={styles.circle2}
                  id="AboutCircle"
                  style={{ backgroundColor: isActive == 1 ? "green" : "black" }}
                ></div>
              </div>
              <div
                className={styles.circle1}
                style={{ backgroundColor: isActive == 2 ? "green" : "#ffffff" }}
              >
                <div
                  className={styles.circle2}
                  id="PitchCircle"
                  style={{ backgroundColor: isActive == 2 ? "green" : "black" }}
                ></div>
              </div>
              <div
                className={styles.circle1}
                style={{ backgroundColor: isActive == 3 ? "green" : "#ffffff" }}
              >
                <div
                  className={styles.circle2}
                  id="HighlightsCircle"
                  style={{ backgroundColor: isActive == 3 ? "green" : "black" }}
                ></div>
              </div>
              <div
                className={styles.circle1}
                style={{ backgroundColor: isActive == 4 ? "green" : "#ffffff" }}
              >
                <div
                  className={styles.circle2}
                  id="TeamCircle"
                  style={{ backgroundColor: isActive == 4 ? "green" : "black" }}
                ></div>
              </div>
              <div
                className={styles.circle1}
                style={{ backgroundColor: isActive == 5 ? "green" : "#ffffff" }}
              >
                <div
                  className={styles.circle2}
                  id="TeamCircle2"
                  style={{ backgroundColor: isActive == 5 ? "green" : "black" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default NavigationSection;
