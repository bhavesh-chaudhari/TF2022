import React from 'react'
import styles from "../styles/VenueAndForm.module.css"

const VenueAndForm = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["heading"]}>
          <h2 className="yellow-bottom">Venue</h2>
        </div>
        <div className={styles["main"]}>
          <div className={styles["address"]}>
            <p>
              <b>Address:</b>
            </p>
            <p>
              Survey No. 140,141/1 behind Br. Sheshrao Wankhade Shetkari Sahkari
              Soot Girni, Village - Waranga, PO - Dongargaon(Butibori), Tahsil-
              Nagpur (Rural), District Nagpur, Maharashtra- 441108
            </p>
          </div>
          <div className={styles["map"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.548469752466!2d79.02471591472347!3d20.95014039583395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIIIT%20Nagpur!5e1!3m2!1sen!2sin!4v1664371684981!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueAndForm