import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tantrafiesta - 2022</title>
        <meta
          name="description"
          content="IIIT Nagpur's Annual Technical Festival"
        />
        <meta
          name="keywords"
          content="Tantra, Tantrafiesta 2022, IIIT Nagpur's Techfest, "
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tantrafiesta.iiitn.ac.in/" />
        <meta property="og:title" content="Tantrafiesta - 2022" />
        <meta
          property="og:description"
          content="IIIT Nagpur's Annual Technical Festival"
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663171026/tf2022/tantrafiesta-2022-logo.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tantrafiesta.iiitn.ac.in/"
        />
        <meta property="twitter:title" content="Tantrafiesta - 2022" />
        <meta
          property="twitter:description"
          content="IIIT Nagpur's Annual Technical Festival"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/doraexp69/image/upload/v1663171026/tf2022/tantrafiesta-2022-logo.png"
        ></meta>
      </Head>
      <>
        <Hero />
      </>
    </div>
  );
};

export default Home;
