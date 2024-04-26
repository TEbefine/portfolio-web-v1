import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { script } from "../features/language/scrip";
import ChangeButton from "../features/language/changeButton";
import ProjectJS from "../features/changePic/ProjectJS";
import SectionJS from "../features/secJS/SectionJS";

function HomePage() {
  const [language, setLanguage] = useState("UK");
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
    <div ref={reRef}>
      <header className="adjustHeader">
        <Link to="/details-web" className="nav-link">
          {script[language].header.nav}{" "}
          <span class="material-symbols-outlined">arrow_outward</span>
        </Link>
        <section>
          <div className={shouldAnimate ? "animated" : ""}>
            <h2 id={language}>{script[language].header.sectionOne}</h2>
          </div>
          <div className={shouldAnimate ? "curtain" : ""}></div>
          <div className="curtain" id={language + "Curtain"}></div>
          <div className="greeting" id={language}>
            <p id={language}>
              {script[language].header.sectionTwoPointOne}
              <span className="name" id={language}>
                {script[language].header.name}
              </span>
              {script[language].header.sectionTwoPointTwo}
            </p>
            <div className="ChangeLanguage reveal">
              <p id={language}>{script[language].header.sectionThree}</p>
              <ChangeButton
                onLanguageChange={handleLanguageChange}
                language={language}
              />
            </div>
          </div>
        </section>
      </header>
      <main>
        <p className="into" id={language + "Into"}>
          {script[language].main.into}
        </p>
        <div className="contain" id={language + "Main"}>
          <img className="cat" src="/img/ooohCat.png" alt="cute cat" />
          <svg className="sectionSp" width="250" height="250">
            <path id="curve" d="M 25 125 A 100 100 0 1 1 25 127"></path>
            <text className="text">
              <textPath href="#curve">
                {script[language].main.section.oohCat}
              </textPath>
            </text>
          </svg>
          <section className="secOne" id={language + "SecOne"}>
            <img src="/img/tea-cozy.png" alt="project tea cozy" />
            <p>&nbsp;&nbsp;&nbsp;{script[language].main.section.secOne}</p>
          </section>
          <section className="secTwo" id={language + "SecTwo"}>
            <p>&nbsp;&nbsp;&nbsp;{script[language].main.section.secTwo}</p>
            <ProjectJS />
          </section>
          <section className="secThree" id={language + "SecThree"}>
            <p>&nbsp;&nbsp;&nbsp;{script[language].main.section.secThree}</p>
            <img src="/img/portfolio.png" alt="HTML portfolio" />
          </section>
          <Link
            to="/details-skills"
            className={`nav-link-two ${language}NavLink`}
            id={language + "NavTwo"}
          >
            <div className={language + "LinkBtn"}>
              {script[language].main.buttonWord.detail.del}
              <span id={language + "Mis"}>{script[language].main.buttonWord.detail.spDel}</span>
              <span className="material-symbols-outlined" id={language + "Mis"}>
                arrow_outward
              </span>
              <span className={`${language}More`}>
                {script[language].main.buttonWord.more}
              </span>
            </div>
          </Link>
        </div>
        <div className="JS">
          <SectionJS language={language} />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
