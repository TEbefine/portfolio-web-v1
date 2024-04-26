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
            &nbsp;&nbsp;&nbsp;{script[language].main.section.secFour.secOne}
            <br /> <br />
            &nbsp;&nbsp;&nbsp;{script[language].main.section.secFour.secTwo}
            <br /> <br />
            &nbsp;&nbsp;&nbsp;{script[language].main.section.secFour.secThree}
          </p>
        </div>
        <Link to="/details-web" className={styles.navLink}>
          {script[language].main.buttonWord.linkButton}{" "}
          <span class="material-symbols-outlined">arrow_outward</span>
        </Link>
      </div>
    </div>
  );
}

export default SectionJS;
