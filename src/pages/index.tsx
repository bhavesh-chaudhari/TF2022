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
      </Head>
      <>
        <Hero />
      </>
    </div>
  );
};

export default Home;
