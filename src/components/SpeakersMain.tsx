import React from 'react'
import styles from "../styles/SpeakersMain.module.css"
import speakersData from '../data/speakersData';
import SpeakerCard from './SpeakerCard';

const SpeakersMain = () => {
  return (
    <section className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 id="speakers" className="yellow-bottom">
            Speakers
          </h2>
        </div>
        <div className={styles["main"]}>
          {speakersData.map((speaker) => {
            return <SpeakerCard key={speaker.id} {...speaker}></SpeakerCard>;
          })}
        </div>
      </div>
    </section>
  );
}

export default SpeakersMain