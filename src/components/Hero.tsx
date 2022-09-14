import React from "react";
import styles from "../styles/Hero.module.css";
import NextImage from "next/image";
import CloudLeft from "./svgs/hero/CloudLeft";
import CloudRight from "./svgs/hero/CloudRight";
import Layer1 from "./svgs/hero/Layer1";
import Layer2 from "./svgs/hero/Layer2";
import Layer3 from "./svgs/hero/Layer3";
import Layer4Left from "./svgs/hero/Layer4Left";
import Layer4Right from "./svgs/hero/Layer4Right";
import TreeLeft from "./svgs/hero/TreeLeft";
import TreeRight from "./svgs/hero/TreeRight";
import Sun from "./svgs/hero/Sun";
import DigitalTree from "./svgs/hero/DigitalTree";
import HeroFooter from "./HeroFooter";
// import Countdown from "react-countdown";<
import dynamic from "next/dynamic";

const Countdown = dynamic(import("react-countdown"), {
  ssr: false,
});

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return <h1 className={styles["countdown-heading"]}> LIVE </h1>;
  } else {
    const DaysString = days > 1 ? "Days" : "Day";
    const HoursString = hours > 1 ? "Hours" : "Hour";
    const MinsString = minutes > 1 ? "Minutes" : "Minute";
    const SecString = seconds > 1 ? "Seconds" : "Second";

    return (
      <div className={styles["countdown"]}>
        <div className={styles["days"]}>
          <h1 className={styles["countdown-heading"]}>{days}</h1>
          <p className={styles["countdown-para"]}> {DaysString} </p>
        </div>
        <div className={styles["hours"]}>
          <h1 className={styles["countdown-heading"]}>{hours}</h1>
          <p className={styles["countdown-para"]}> {HoursString} </p>
        </div>
        <div className={styles["minutes"]}>
          <h1 className={styles["countdown-heading"]}>{minutes}</h1>
          <p className={styles["countdown-para"]}> {MinsString} </p>
        </div>
        <div className={styles["seconds"]}>
          <h1 className={styles["countdown-heading"]}>{seconds}</h1>
          <p className={styles["countdown-para"]}> {SecString} </p>
        </div>
      </div>
    );
  }
};

const Hero = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["event-theme"]}>
          <div className={styles["title"]}>
            <div className={styles["logo"]}>
              <NextImage
                layout="fill"
                src={"/favicons/tantrafiesta-logo.png"}
                alt="TantraFiesta Logo"
              ></NextImage>
            </div>
            <h2>TantraFiesta 2022</h2>
          </div>
          <div className={styles["theme"]}>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              Greener
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              Tomorrow
            </h1>
          </div>
          <div className={styles["underline"]}></div>
          <div className={styles["timing"]}>
            {/* <p>going live in ... </p> */}
          </div>
          <div>
            <Countdown
              // new Date("October 15, 2022 10:00:00")
              date={"October 15, 2022 10:00:00"}
              renderer={renderer}
            />
          </div>
        </div>
      </div>
      <div className={styles["bg"]}>
        <div className={styles["clouds"]}>
          <div className={styles["cloud-left"]}>
            <CloudLeft
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-easing="ease-out"
              data-aos-offset="400"
            ></CloudLeft>
          </div>
          <div className={styles["cloud-right"]}>
            <CloudRight
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out"
              data-aos-offset="400"
            ></CloudRight>
          </div>
        </div>
        <div className={styles["landscape"]}>
          <div className={styles["layer-1"]}>
            <Layer1></Layer1>
          </div>
          <div className={styles["layer-2"]}>
            <Layer2></Layer2>
          </div>
          <div className={styles["layer-3"]}>
            <Layer3></Layer3>
          </div>
          <div className={styles["layer-4-left"]}>
            <Layer4Left></Layer4Left>
          </div>
          <div className={styles["layer-4-right"]}>
            <Layer4Right></Layer4Right>
          </div>
          <div className={styles["layer-5"]}></div>
          <div className={styles["trees"]}>
            <div className={styles["left-tree"]}>
              <TreeLeft></TreeLeft>
            </div>
            <div className={styles["right-tree"]}>
              <TreeRight></TreeRight>
            </div>
          </div>
          <div className={styles["sun"]}>
            <Sun
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              data-aos-offset="100"
            ></Sun>
          </div>
          <div className={styles["digital-tree"]}>
            <DigitalTree></DigitalTree>
          </div>
        </div>
      </div>
      <div className="hero-footer">
        <HeroFooter />
      </div>
    </div>
  );
};

export default Hero;
