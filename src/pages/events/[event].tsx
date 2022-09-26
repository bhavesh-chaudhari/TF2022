import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import eventsData from "../../data/eventsData.json";

const index = ({ event }: any) => {

  console.log(event)
  
  return (
    <>
      <Head>
        <title>{event.name} - Tantrafiesta 2022</title>
      </Head>
      <div>
        <h1>{event.name}</h1>
      </div>
    </>
  );
};

export default index;

export const getStaticProps = async ({ params }: any) => {
  const event = eventsData.events.filter(
    (event) => event.path === params.event
  )[0];

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = () => {
  const paths = eventsData.events.map((event) => `/events/${event.path}`);

  return {
    paths,
    fallback: false,
  };
};
