import React from "react";
import styles from "../styles/Highlights.module.css";
import ReactPlayer from 'react-player'

const Highlights = () => {
  return <div className={styles.Highlights}>

    <div className={styles.Cont}>
        <div className={`${styles.Headd}  ${styles.Headline}`}>
            <span>Highlights</span>
        </div>
        <div className={`${styles.Play}`}>
            <ReactPlayer url="https://www.youtube.com/watch?v=0v4iftGneYk&ab_channel=TantraFiestaIIITNagpur" controls={true}/>
        </div>
        <div className={styles.Contet}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel beatae quibusdam maiores obcaecati cumque consequuntur, quaerat sunt praesentium velit! Facilis sapiente possimus minima, perspiciatis iure odit enim dicta vel reiciendis.</p>
        </div>
  </div>

  </div>;
};

export default Highlights;