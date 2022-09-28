// import React from "react";
// import Link from "next/link";
// import NextImage from "next/image";
// import events from "../../data/eventsData";
// import styles from "../../styles/event/Events.module.css";

// const index = () => {
//   return (
//     <BgWrapper>
//       <div className={styles["container"]}>
//         <h1 className={styles["heading"]}>Events under TF2022</h1>
//         <div className={styles["underline"]} />
//         <ul className={styles["event-list"]}>
//           {events.map((item) => {
//             return (
//               <li key={item.id} className={styles["logo-container"]}>
//                 <Link href={`/events/${item.path}`}>
//                   <NextImage
//                     src={item.imgPath}
//                     className={styles["logo"]}
//                     height={300}
//                     width={300}
//                   />
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </BgWrapper>
//   );
// };

// export default index;

import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import styles from "../../styles/EventsPageMain.module.css"
import BgWrapper from "../../components/BgWrapper";
import events from "../../data/eventsData";

const HighlightedEvents = () => {
  return (
    <BgWrapper>
      <div className={styles["highlighted-events"]}>
        <div className={styles["content"]}>
          <div className={styles["heading"]}>
            <h1 className={"yellow-bottom"}>EVENTS IN TF2022</h1>
          </div>
          <div className={styles["components"]}>
            {
              events.map(item=>{
                return (
                  <Link key={item.id} href={`/events/${item.path}`} passHref>
                    <a className={styles["image-container"]}>
                      <NextImage
                        src={item.imgPath}
                        className={styles["image"]}
                        layout={"fill"}
                        alt="CodeFiesta Organized by Dot Slash Community at TantraFiesta"
                      />
                    </a>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </BgWrapper>
  );
};

export default HighlightedEvents;