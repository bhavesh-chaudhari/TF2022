import React from "react";
import EventLayout from "../../layouts/EventLayout";
import EventDescription from "../../components/event/EventDescription";
import EventTimeline from "../../components/event/EventTimeline";
import EventPrizes from "../../components/event/EventPrizes";
import events from "../../data/eventsData";

const index = ({ event }: any) => {
  return (
    <>
      <EventLayout event={event}>
        <EventDescription {...event}></EventDescription>
        <EventTimeline {...event}></EventTimeline>
        <EventPrizes {...event}></EventPrizes>
      </EventLayout>
    </>
  );
};

export default index;

export const getStaticProps = async ({ params }: any) => {
  let event = events.filter((event: any) => event.path === params.event)[0];

  event = JSON.parse(JSON.stringify(event));

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = () => {
  const paths = events.map((event: any) => `/events/${event.path}`);

  return {
    paths,
    fallback: false,
  };
};
