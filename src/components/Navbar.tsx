//@ts-nocheck
import {useState} from "react";
import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  const [isActive, setIsActive]= useState(false);
   const handleClick =(button)=>{
    setIsActive(current=>!current);
  
   };
  return (
       <>
      <div className={styles.MainNav}>
        <div className={styles.elements}>
          <ul>
            <li className={styles.links} id="About">
              <a href="#" onClick={handleClick}>ABOUT</a>
            </li>
            <li className={styles.links } id="Pitch">
              <a href="#" onClick={handleClick}>HIGHLIGHTS</a>
            </li>
            <li className={styles.links} id="mfs">
              <a href="#" onClick={handleClick}>MESSAGE FOR <br /> STUDENTS  </a>
            </li>
            <li className={styles.links} id="mfsn">
              <a href="#" onClick={handleClick}>MESSAGE FOR <br /> SPONSORS </a>
            </li>
            <li className={styles.links} id="Team">
              <a href="#" onClick={handleClick}>TEAM</a>
            </li>
          </ul>
          </div>
          <div className={styles.maincontainer}>
          <div className={styles.container}>
          </div>
          <div className={styles.circles}>
            <div className={styles.circle1}>
                <div className={styles.circle2} id="AboutCircle" style={{backgroundColor:isActive?'green':'black'}}>
                    
                    </div>
            </div>
            <div className={styles.circle1}>
                <div className={styles.circle2}  id="PitchCircle" style={{backgroundColor:isActive?'green':'black'}}></div>
            </div><div className={styles.circle1}>
                <div className={styles.circle2}  id="HighlightsCircle"style={{backgroundColor:isActive?'green':'black'}}></div>
            </div><div className={styles.circle1}>
                <div className={styles.circle2}id="TeamCircle"style={{backgroundColor:isActive?'green':'black'}}></div>
            </div>
            <div className={styles.circle1}>
                <div className={styles.circle2} id="TeamCircle2"style={{backgroundColor:isActive?'green':'black'}}></div>
            </div>
          </div>
          </div>
     </div>
    </>
  );
};

export default Navbar;


// about 
// highlights
// message for students
// message for sponsors
