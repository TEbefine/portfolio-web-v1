import React from "react";
import styles from "./ProjectJs.module.css";

function ProjectJS() {
  return (
    <div className={styles.sliderOne}>
      <div className={styles.slidesOne}>
        {/* radio buttons start */}
        <input type="radio" name="radio-btnOne" id={styles.radio1One} />
        <input type="radio" name="radio-btnOne" id={styles.radio2One} />
        <input type="radio" name="radio-btnOne" id={styles.radio3One} />
        {/* radio buttons end */}
        {/* slide images start */}
        <div className={`${styles.slideOne} ${styles.firstOne}`}>
          <img src="/img/mystery-organism.png" alt="project new DNA" />
        </div>
        <div className={styles.slideOne}>
          <img src="/img/gameJS.png" alt="project found hat" />
        </div>
        <div className={styles.slideOne}>
          <img src="/img/credit-checker.png" alt="project credit checker" />
        </div>
        {/* slide images end */}
        {/* automatic navigation start */}
        <div className={styles.navAutoOne}>
          <div className={styles.autoBtn1One}></div>
          <div className={styles.autoBtn2One}></div>
          <div className={styles.autoBtn3One}></div>
        </div>
        {/* automatic navigation end */}
        {/* manal navigation start */}
        <div className={styles.navManualOne}>
          <label
            htmlFor={styles.radio1One}
            className={styles.manualBtnOne}
          ></label>
          <label
            htmlFor={styles.radio2One}
            className={styles.manualBtnOne}
          ></label>
          <label
            htmlFor={styles.radio3One}
            className={styles.manualBtnOne}
          ></label>
        </div>
        {/* manal navigation end */}
      </div>
    </div>
  );
}

export default ProjectJS;
