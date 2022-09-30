import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/TfInPastCard.module.css"

const TfinPastCard = (props: any) => {
  const [readMore, setReadMore] = useState(true);

  const { imgPath, cardTitle, cardPara, animation, hasVideo } = props;

  const media = useRef(null);
  const content = useRef(null);
  const paraRef = useRef(null);

  const More = () => {
    setReadMore(!readMore);
    if (readMore) {
      (content as any).current.style.height = "100%";
      (media as any).current.style.height = "0%";
      (paraRef as any).current.style.overflow = "auto";
      (paraRef as any).current.style.height = "23rem";
    } else {
      (content as any).current.style.height = "60%";
      (media as any).current.style.height = "40%";
      (paraRef as any).current.style.overflow = "hidden";
      (paraRef as any).current.style.height = "8em";
    }
  };

  useEffect(() => {
    (paraRef as any).current.scrollTo(0, 0);
  }, [readMore]);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div ref={media} className={styles["card-media"]}>
          {hasVideo ? (
            <iframe
              src="https://www.youtube.com/embed/0v4iftGneYk?autoplay=1"
              title="Glimpse of TF2K21 | IIIT Nagpur | Throwback"
              frameBorder="0"
              allowFullScreen
              srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/0v4iftGneYk?autoplay=1><img src=https://img.youtube.com/vi/0v4iftGneYk/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"
            ></iframe>
          ) : (
            <Image layout="fill" src={imgPath} alt={`${cardTitle} image`} />
          )}
        </div>
        <div ref={content} className={styles["card-content"]}>
          <div className={styles["card-title"]}>
            <h2>{cardTitle}</h2>
          </div>
          <div className={styles["card-para"]}>
            <p id="lol" ref={paraRef}>
              {cardPara}
            </p>
          </div>
          <button className={styles["read-btn"]} onClick={More}>
            {readMore ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TfinPastCard
