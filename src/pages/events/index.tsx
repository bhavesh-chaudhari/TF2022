import React from "react";
import Link from "next/link";
import events from "../../data/eventsData";

const index = () => {
  return (
    <>
      <ul style={{ paddingTop: "70px" }}>
        {events.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/events/${item.path}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default index;
