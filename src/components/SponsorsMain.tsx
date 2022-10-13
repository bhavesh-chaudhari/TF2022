import React from "react";
import styles from "../styles/SponsorsMain.module.css";
import Link from "next/link";
import Image from "next/image";
import sponsorsData from "../data/sponsorsData";
import Pattern from "./svgs/Pattern";

const SponsorSection = (props: any) => {
  const { id, title, sponsors } = props;

  return (
    <div className={styles["section-container"]}>
      <div
        data-aos="fade-up"
        data-aos-duration="400"
        data-aos-once={id === 2 ? true : false}
        className={styles["sponsors-heading"]}
      >
        <h2>{title}</h2>
      </div>
      <div className={styles["section-content"]}>
        {sponsors.map((sponsor: any) => {
          return (
            <Link key={sponsor.id} href={sponsor.sponsorLink} passHref>
              <a
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-once={id === 2 ? true : false}
                target={"_blank"}
                rel="noreferrer"
                className={styles["sponsor"]}
              >
                <Image
                  src={sponsor.image.path}
                  width={sponsor.image.width}
                  height={sponsor.image.height}
                  alt={`TantraFiesta 2022's sponsor ${sponsor.name}`}
                ></Image>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const SponsorsMain = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["heading"]}>
        <h1>Our Sponsors</h1>
      </div>
      <div className={styles["content"]}>
        {sponsorsData.map((data) => {
          return <SponsorSection key={data.id} {...data}></SponsorSection>;
        })}
      </div>
    </div>
  );
};

export default SponsorsMain;
