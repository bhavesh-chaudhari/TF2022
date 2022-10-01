import React from "react";
import Image from "next/image";
import styles from "../../styles/event/EventDescription.module.css";
import { format } from "date-fns";
import dynamic from "next/dynamic";

const FacebookIcon = dynamic(
  () => {
    return import("next-share").then((mod) => mod.FacebookIcon);
  },
  { ssr: false }
);

const WhatsappIcon = dynamic(
  () => {
    return import("next-share").then((mod) => mod.WhatsappIcon);
  },
  { ssr: false }
);

const TwitterIcon = dynamic(
  () => {
    return import("next-share").then((mod) => mod.TwitterIcon);
  },
  { ssr: false }
);

const LinkedinIcon = dynamic(
  () => {
    return import("next-share").then((mod) => mod.LinkedinIcon);
  },
  { ssr: false }
);

const FacebookShareButton = dynamic(
  () => {
    return import("next-share").then((mod) => mod.FacebookShareButton);
  },
  { ssr: false }
);

const WhatsappShareButton = dynamic(
  () => {
    return import("next-share").then((mod) => mod.WhatsappShareButton);
  },
  { ssr: false }
);

const TwitterShareButton = dynamic(
  () => {
    return import("next-share").then((mod) => mod.TwitterShareButton);
  },
  { ssr: false }
);

const LinkedinShareButton = dynamic(
  () => {
    return import("next-share").then((mod) => mod.LinkedinShareButton);
  },
  { ssr: false }
);

interface Props {
  name: string;
  imgPath: string;
  description: string;
  organizer: string;
  registrationLink: string;
  registration_deadline: any;
}

const EventDescription = ({
  name,
  imgPath,
  description,
  organizer,
  registrationLink,
  registration_deadline,
}: Props): JSX.Element => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["heading"]}>{name}</h1>
      <div className={styles["content"]}>
        <div className={styles["img-bg"]}>
          <div className={styles["quick-details"]}>
            <h3>{name} Quick Info </h3>
            <ul>
              <li>Organized by {organizer}</li>
              {registration_deadline ? (
                <li>
                  Registrations up from{" "}
                  {format(new Date(registration_deadline[0]), "do MMMM yyyy")}{" "}
                  until{" "}
                  {format(new Date(registration_deadline[1]), "do MMMM yyyy")}
                </li>
              ) : null}
              <li>
                <a href="#timeline">
                  Checkout Timeline <span role={"img"}>👇</span>{" "}
                </a>
              </li>
              <li>
                <a href="#prizes">
                  Checkout Prizes <span role={"img"}>👇</span>{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["img-container"]}>
            <Image
              src={imgPath}
              alt={`${name} organized by ${organizer}`}
              layout="fill"
              draggable={"false"}
            ></Image>
          </div>
          <div className={styles["link-container"]}>
            <h3>Quick Links</h3>
            <div className={styles["links"]}>
              <div className={styles["link"]}>
                <a
                  className={styles["registration-link"]}
                  href={registrationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
              </div>
              <h4>Share with friends</h4>
              <div className={styles["share"]}>
                <div className={styles["link"]}>
                  <FacebookShareButton
                    url={
                      typeof window !== "undefined"
                        ? String(window.location)
                        : ""
                    }
                    quote={description}
                    hashtag={"#tf2k22"}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </div>
                <div className={styles["link"]}>
                  <TwitterShareButton
                    url={
                      typeof window !== "undefined"
                        ? String(window.location)
                        : ""
                    }
                    title={`Hey! Checkout ${name} powered by TantraFiesta. Register yourself now and get ready for exciting events.`}
                    hashtags={["tf2k22", "tantrafiesta", "iiitn"]}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <div className={styles["link"]}>
                  <WhatsappShareButton
                    url={
                      typeof window !== "undefined"
                        ? String(window.location)
                        : ""
                    }
                    title={`Hey! Checkout ${name} powered by TantraFiesta. Register yourself now and get ready for exciting events.`}
                    windowWidth={800}
                    windowHeight={600}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
                <div className={styles["link"]}>
                  <LinkedinShareButton
                    url={
                      typeof window !== "undefined"
                        ? String(window.location)
                        : ""
                    }
                    title={`${name} - TanraFiesta 2k22`}
                    summary={description}
                    source={
                      typeof window !== "undefined" ? document.domain : ""
                    }
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["desc"]}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
