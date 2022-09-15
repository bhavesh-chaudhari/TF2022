import React from "react";
import styles from "../styles/HeroCountDown.module.css";
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

const HeroCountDown = () => {
  return (
    <div>
      <Countdown
        // new Date("October 15, 2022 10:00:00")
        date={"October 15, 2022 10:00:00"}
        renderer={renderer}
      />
    </div>
  );
};

export default HeroCountDown;
