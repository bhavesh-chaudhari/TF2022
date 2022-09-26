import React from "react";
import styles from "../styles/AboutTantra.module.css";

const AboutTantra = () => {
  return (
    <div className={styles["about-tantra"]}>
      <h1 className={styles["heading"]}> About Tantrafiesta</h1>
      <div className={styles["underline"]} />
      <div className={styles["para-container"]}>
        <p className={styles["para"]}>
          Tantrafiesta is the annual science and technology festival of the
          Indian Institute of Information Technology, Nagpur. Tantrafiesta hosts
          a plethora of social initiatives and outreach programs such as
          hackathons, coding contests, robo-races, debates, and seminars that
          help inspire the next generation of scientists and engineers.
        </p>
        <p className={styles["para"]}>
          Tantrafiesta aims to provide a platform in order to establish a forum
          that will enable the exchange of knowledge, experience, and
          information related to a range of emerging technologies. This year,
          TantaFiesta is focusing on the use of greener technologies, and how
          utilizing greener technologies is the way forward.
        </p>
      </div>
    </div>
  );
};

export default AboutTantra;
