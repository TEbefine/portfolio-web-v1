import React, { useState } from "react";
import { Link } from "react-router-dom";
import { script } from "../features/language/scrip";
import ChangeButton from "../features/language/changeButton";

function HomePage() {
  const [language, setLanguage] = useState("UK");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

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
        <h2>{script[language].header.sectionOne}</h2>
        <div className="greeting">
          <p>{script[language].header.sectionTwo}</p>
          <div className="ChangeLanguage">
            <p>{script[language].header.sectionThree}</p>
            <ChangeButton onLanguageChange={handleLanguageChange} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default HomePage;
