import React from "react";
import styles from "../styles/Highlights.module.css";
import ReactPlayer from 'react-player'

const Highlights = () => {
  return (
    <div className={styles.HighlightsSection}>
        <div>
            <h1 className={styles.Heading}>Highlights</h1>
            <div className={styles.underline} />
        </div>
        <div className={`${styles.playerWrapper}`}>
            <ReactPlayer className={styles.player} width="100%" url="https://www.youtube.com/watch?v=0v4iftGneYk&ab_channel=TantraFiestaIIITNagpur" controls={true}/>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vel beatae quibusdam maiores obcaecati cumque consequuntur, 
            quaerat sunt praesentium velit! Facilis sapiente possimus 
            minima, perspiciatis iure odit enim dicta vel reiciendis.
        </div>

    </div>
  );
};

export default Highlights;