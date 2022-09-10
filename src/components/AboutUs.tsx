import React from "react";
import styles from "../styles/AboutUs.module.css";

function aboutUs() {
  return (
    <div className={styles.AboutusSection}>
      About
      <div className={styles.Heading}>About</div>
      <hr className={styles.underline} />
      <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
        libero ut mi gravida hendrerit ac id nisi. Suspendisse eget interdum
        nulla. Cras portti eo elementum augue placerat porta. Donec sit amet
        libero ve lacus fermentum cursus. Ut ut tortor eget libero tincidunt
        vehicula vitae id purus. Duis lectus velit, finibus eu dui vitae,
        posuere vestibulum nisl. Vivamus dolor libero, scelerisque sed accumsan
        vel, gravida sed sem. Integer metus nisl, venenatis nec vehicula sed,
        tempus sit amet mauris. Suspendisse eu tincidunt magna. Sed at facilisis
        tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Phasellus elementum eros quis.
      </div>
    </div>
  );
}

export default aboutUs;
