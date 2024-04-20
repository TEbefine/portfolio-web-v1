import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { script } from "../features/language/scrip";
import ChangeButton from "../features/language/changeButton";

function HomePage() {
  const [language, setLanguage] = useState("UK");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const curtain = document.querySelector(".curtain");

    const handleAnimationEnd = () => {
      curtain.style.display = "none";
    };

    curtain.addEventListener("animationend", handleAnimationEnd);

    return () => {
      curtain.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <header>
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
        <h2 id={language}>{script[language].header.sectionOne}</h2>
        <div className="curtain"></div>
        <div className="greeting">
          <p id={language}>
            {script[language].header.sectionTwoPointOne}
            <span className="name">{script[language].header.name}</span>
            {script[language].header.sectionTwoPointTwo}
          </p>
          <div className="ChangeLanguage">
            <p id={language}>{script[language].header.sectionThree}</p>
            <ChangeButton onLanguageChange={handleLanguageChange} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default HomePage;
