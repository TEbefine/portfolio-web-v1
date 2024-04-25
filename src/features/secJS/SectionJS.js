import React from "react";
import styles from "./SectionJS.module.css";
import { Link } from "react-router-dom";
import { script } from "../language/scrip";

function SectionJS({ language }) {
  return (
    <div className={styles.secSkill}>
      <img
        className={styles.imageJm}
        src="/img/jammming1.png"
        alt="explant jammming method one"
      />
      <div className={styles.secIn}>
        <div>
          <p className={styles.aritce}>
            &nbsp;&nbsp;&nbsp;I built a React web application called Jammming,
            leveraging my knowledge of React and utilizing requests with the
            Spotify API to search the Spotify library and create a custom
            playlist.
            <br /> <br />
            &nbsp;&nbsp;&nbsp;In addition to React, I am proficient in using
            Router (for smooth navigation), Redux (for easy state management in
            web applications), and Redux Toolkit.
            <br /> <br />
            &nbsp;&nbsp;&nbsp;I possess a strong foundational skill set in web
            development and am adept at quickly learning new technologies used
            within your company. I am also adept at collaborating with team
            members; if you introduce me to the programs used in your business,
            I can easily understand and rapidly adapt.
          </p>
        </div>
        <Link to="/details-web" className={styles.navLink}>
          View Projects{" "}
          <span class="material-symbols-outlined">arrow_outward</span>
        </Link>
      </div>
    </div>
  );
}

export default SectionJS;
