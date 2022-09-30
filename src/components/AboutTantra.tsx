import React from "react";
import styles from "../styles/AboutTantra.module.css";

const AboutTantra = () => {
  return (
    <div id="about-tantra" className={styles["about-tantra"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className={"yellow-bottom"}>ABOUT TANTRAFIESTA</h2>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" className={styles["description"]}>
          <p>
            Tantrafiesta is the annual science and technology festival of the
            Indian Institute of Information Technology, Nagpur. Tantrafiesta
            hosts a plethora of social initiatives and outreach programs such as
            hackathons, coding contests, robo-races, debates, and seminars that
            help inspire the next generation of scientists and engineers.
          </p>{" "}
          <br />
          <p>
            Tantrafiesta aims to provide a platform in order to establish a
            forum that will enable the exchange of knowledge, experience, and
            information related to a range of emerging technologies. This year,
            TantaFiesta is focusing on the use of greener technologies, and how
            utilizing greener technologies is the way forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTantra;
