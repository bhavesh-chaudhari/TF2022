import React from "react";
import AboutTantra from "../components/AboutTantra";
import BgWrapper from "../components/BgWrapper";
import HighlightedEvents from "../components/HighlightedEvents";
import HighlightedSpeakers from "../components/HightlightedSpeakers";
import TFinPast from "../components/TFinPast";

const landing = () => {
  return (
    <div>
      <BgWrapper>
        <AboutTantra />
        <HighlightedEvents />
        <HighlightedSpeakers />
        <TFinPast />
      </BgWrapper>
    </div>
  );
};

export default landing;
