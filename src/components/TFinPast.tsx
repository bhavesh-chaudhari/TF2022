import React from "react";
import styles from "../styles/TFinPast.module.css"
import Slider from "react-slick";
import LeftActive  from "./svgs/LeftActive";
import RightActive from "./svgs/RightActive";
import Link from "next/link";
import tfInPastData from "../data/tfInPastData";
import TfinPastCad from "./TfInPastCard";

const ArrowLeft = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <LeftActive
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const ArrowRight = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <RightActive
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const FromTheTeam = () => {
  const settings = {
    dots: true,
    swipeToSlide: true,
    variableWidth: true,
    adaptiveHeight: true,
    infinite: false,
    slidesToShow: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    arrow: true,
    autoplay: false,
    speed: 400,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ marginTop: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div id="past-glimpse" className={styles["container"]}>
      <div className={styles["heading"]}>
        <h2 className="yellow-bottom" >Past Glimpse</h2>
      </div>
      <div className={styles["from-carousel-container"]}>
        <Slider {...settings}>
          {tfInPastData.map((card: any) => {
            return <TfinPastCad key={card.id} {...card}></TfinPastCad>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FromTheTeam;