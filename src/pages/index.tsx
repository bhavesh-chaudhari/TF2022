import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutTantra from "../components/AboutTantra";
import BgWrapper from "../components/BgWrapper";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HighlightedEvents from "../components/HighlightedEvents";
import TFinPast from "../components/TFinPast";
import VenueAndForm from "../components/VenueAndForm";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tantrafiesta - 2022</title>
        <meta
          name="description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur.
Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        />
        <meta
          name="keywords"
          content="Tantrafiesta 2022, tf2022, Tantra, HackMe Tantrafiesta, Tantrafiesta IIIT Nagpur, IIIT Nagpur's Technical fest, Events in Nagpur, technical fest, iiit tech fest"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.in/" />
        <meta property="og:title" content="Tantrafiesta - 2022" />
        <meta
          property="og:description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur.
                Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tantrafiesta.in/" />
        <meta property="twitter:title" content="Tantrafiesta - 2022" />
        <meta
          property="twitter:description"
          content="Tantrafiesta is the annual science and technology festival of the Indian Institute of Information Technology, Nagpur.
            Tantrafiesta hosts a plethora of social initiatives and outreach programs such as hackathons, coding contests, robo-races, debates, and seminars that help inspire the next generation of scientists and engineers."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663765902/tf2022/tantrafiesta-logo.png"
        ></meta>
      </Head>
      <>
        <Hero />
        <BgWrapper>
          <AboutTantra />
          <HighlightedEvents />
          <TFinPast />
          <VenueAndForm></VenueAndForm>
        </BgWrapper>
        {/* <Footer /> */}
      </>
    </div>
  );
};

export default Home;
