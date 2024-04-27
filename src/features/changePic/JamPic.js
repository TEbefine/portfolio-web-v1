import React, { useState, useEffect } from "react";
import styles from "./JamPic.module.css";

function JamPic() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter % 5) + 1);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const radioElement = document.getElementById(styles["radio" + counter]);
    if (radioElement) radioElement.checked = true;
  }, [counter]);

  const handleRadioClick = (newCounter) => {
    setCounter(newCounter);
  };

  return (
    <div className={styles.JmP}>
      <div className={styles.slides}>
        {/* radio buttons start */}
        <input
          type="radio"
          name="radio-btn"
          id={styles.radio1}
          onClick={() => handleRadioClick(1)}
        />
        <input
          type="radio"
          name="radio-btn"
          id={styles.radio2}
          onClick={() => handleRadioClick(2)}
        />
        <input
          type="radio"
          name="radio-btn"
          id={styles.radio3}
          onClick={() => handleRadioClick(3)}
        />
        <input
          type="radio"
          name="radio-btn"
          id={styles.radio4}
          onClick={() => handleRadioClick(4)}
        />
        <input
          type="radio"
          name="radio-btn"
          id={styles.radio5}
          onClick={() => handleRadioClick(5)}
        />
        {/* radio buttons end */}
        <div className={`${styles.slide} ${styles.first}`}>
          <img src="/img/jammming1.png" alt="explant jammming method one" />
        </div>
        <div className={styles.slide}>
          <img src="/img/jammming2.png" alt="explant jammming method two" />
        </div>
        <div className={styles.slide}>
          <img src="/img/jammming3.png" alt="explant jammming method three" />
        </div>
        <div className={styles.slide}>
          <img src="/img/jammming4.png" alt="explant jammming method four" />
        </div>
        <div className={styles.slide}>
          <img src="/img/jammming5.png" alt="explant jammming method five" />
        </div>
        {/* automatic navigation start */}
        <div className={styles.navAuto}>
          <div className={styles.autoBtn1}></div>
          <div className={styles.autoBtn2}></div>
          <div className={styles.autoBtn3}></div>
          <div className={styles.autoBtn4}></div>
          <div className={styles.autoBtn5}></div>
        </div>
        {/* automatic navigation end */}
        <div className={styles.navManual}>
          <label htmlFor={styles.radio1} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio2} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio3} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio4} className={styles.manualBtn}></label>
          <label htmlFor={styles.radio5} className={styles.manualBtn}></label>
        </div>
        {/* manal navigation end */}
      </div>
    </div>
  );
}

export default JamPic;
