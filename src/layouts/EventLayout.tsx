import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/event/EventLayout.module.css";
import BgWrapper from "../components/BgWrapper";

interface EventProps {
  children: ReactNode;
  event: any;
}

const EventLayout = ({ children, event }: EventProps) => {
  return (
    <>
      <Head>
        <title>{event.name} - Tantrafiesta 2022</title>
      </Head>
      <BgWrapper>
        <div className={styles["container"]}>{children}</div>
      </BgWrapper>
    </>
  );
};

export default EventLayout;
