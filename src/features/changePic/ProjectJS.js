import React from "react";
import styles from "./ProjectJs.module.css";

function ProjectJS() {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {/* radio buttons start */}
        <input type="radio" name="radio-btn" id={styles.radio1} />
        <input type="radio" name="radio-btn" id={styles.radio2} />
        <input type="radio" name="radio-btn" id={styles.radio3} />
        {/* radio buttons end */}
        {/* slide images start */}
        <div className={`${styles.slide} ${styles.first}`}>
          <img src="/img/mystery-organism.png" alt="project new DNA" />
        </div>
        <div className={styles.slide}>
          <img src="/img/gameJS.png" alt="project found hat" />
        </div>
        <div className={styles.slide}>
          <img src="/img/credit-checker.png" alt="project credit checker" />
        </div>
        {/* slide images end */}
        {/* automatic navigation start */}
        <div className={styles.navAuto}>
          <div className={styles.autoBtn1}></div>
          <div className={styles.autoBtn2}></div>
          <div className={styles.autoBtn3}></div>
        </div>
        {/* automatic navigation end */}
        {/* manal navigation start */}
        <div className={styles.navManual}>
          <label htmlFor={styles.radio1} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio2} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio3} className={styles.manualBtn}></label>
        </div>
        {/* manal navigation end */}
      </div>
    </div>
  );
}

export default ProjectJS;
