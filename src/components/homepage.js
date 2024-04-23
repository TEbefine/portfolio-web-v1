import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { script } from "../features/language/scrip";
import ChangeButton from "../features/language/changeButton";
import ProjectJS from "../features/changePic/ProjectJS";

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
      <header>
        <Link to="/pageTwo" className="nav-link">
          {script[language].header.nav}{" "}
          <span class="material-symbols-outlined">arrow_outward</span>
        </Link>
        <section>
          <div className={shouldAnimate ? "animated" : ""}>
            <h2 id={language}>{script[language].header.sectionOne}</h2>
          </div>
          <div className={shouldAnimate ? "curtain" : ""}></div>
          <div className="curtain"></div>
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
              <ChangeButton onLanguageChange={handleLanguageChange} />
            </div>
          </div>
        </section>
      </header>
      <main>
        <p className="into">
          Confident my skills can add value to your team. Let's discuss how we
          can work together.
        </p>
        <div className="contain">
          <p className="sectionSp">
            jkopakopnkopqnkfoqpwfjqwokpvnkbjrvoq[koq[fji
          </p>
          <section className="secOne" id={language}>
            <img src="/img/tea-cozy.png" alt="project tea cozy" />
            <p>
              Far out in the uncharted backwaters of the unfashionable end of
              the western spiral arm of the Galaxy lies a small unregarded
              yellow sun. Orbiting this at a distance of roughly ninety-two
              million miles is an utterly insignificant little blue green planet
              whose ape-descended life forms are so amazingly primitive that
              they still think digital watches are a pretty neat idea.
            </p>
          </section>
          <section className="secTwo">
            <p>
              Far out in the uncharted backwaters of the unfashionable end of
              the western spiral arm of the Galaxy lies a small unregarded
              yellow sun. Orbiting this at a distance of roughly ninety-two
              million miles is an utterly insignificant little blue green planet
              whose ape-descended life forms are so amazingly primitive that
              they still think digital watches are a pretty neat idea.
            </p>
            <ProjectJS />
          </section>
          <section className="secThree">
            <p>
              Far out in the uncharted backwaters of the unfashionable end of
              the western spiral arm of the Galaxy lies a small unregarded
              yellow sun.
            </p>
            <img src="/img/portfolio.png" alt="HTML portfolio" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
