import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { script } from "../features/language/scrip";
import ChangeButton from "../features/language/changeButton";

function HomePage() {
  const [language, setLanguage] = useState("TH");
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const reRef = useRef(null);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    reRef.current.scrollIntoView({ behavior: "smooth" });
    restartAnimation();
  };

  const restartAnimation = () => {
    setShouldAnimate(false); // Turn off animation
    setTimeout(() => {
      setShouldAnimate(true); // Turn on animation after a short delay
    }, 10);
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function reveal() {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <header ref={reRef}>
      <Link to="/pageTwo" className="nav-link">
        {script[language].header.nav}{" "}
        <img
          src="./img/ArrowOutward.png"
          alt="Arrow Icon"
          width="40"
          height="40"
        />
      </Link>
      <section>
        <div className={shouldAnimate ? "animated" : ""}>
          <h2 id={language}>{script[language].header.sectionOne}</h2>
        </div>
        <div className={shouldAnimate ? "curtain" : ""}></div>
        <div className="curtain"></div>
        <div className="greeting">
          <p id={language}>
            {script[language].header.sectionTwoPointOne}
            <span className="name" id={language}>{script[language].header.name}</span>
            {script[language].header.sectionTwoPointTwo}
          </p>
          <div className="ChangeLanguage reveal">
            <p id={language}>{script[language].header.sectionThree}</p>
            <ChangeButton onLanguageChange={handleLanguageChange} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default HomePage;
