import React from "react";
import styles from "../styles/TFinPast.module.css";
import Slider from "react-slick";
import LeftActive from "./svgs/LeftActive";
import RightActive from "./svgs/RightActive";
import tfInPastData from "../data/tfInPastData";
import dynamic from "next/dynamic";

const TfinPastCard = dynamic(() => {
  return import("./TfInPastCard");
});

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
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      id="past-glimpse"
      className={styles["container"]}
    >
      <div className={styles["heading"]}>
        <h2 className="yellow-bottom">Past Glimpse</h2>
      </div>
      <div className={styles["from-carousel-container"]}>
        <Slider {...settings}>
          {tfInPastData.map((card: any) => {
            return <TfinPastCard key={card.id} {...card}></TfinPastCard>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FromTheTeam;
