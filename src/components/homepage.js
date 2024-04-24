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
        <Link to="/details-web" className="nav-link">
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
          <img className="cat" src="/img/ooohCat.png" alt="cute cat" />
            <svg className="sectionSp" width="250" height="250">
              <path id="curve" d="M 25 125 A 100 100 0 1 1 25 127"></path>
              <text className="text">
                <textPath href="#curve">
                  I also have Photoshop skills. OOOOOH . . .
                </textPath>
              </text>
            </svg>
          <section className="secOne" id={language}>
            <img src="/img/tea-cozy.png" alt="project tea cozy" />
            <p>
              Proficient in HTML fundamentals, adept at interpreting and
              executing directives, and skilled in collaborative teamwork,
              ensuring seamless integration within project frameworks.
            </p>
          </section>
          <section className="secTwo">
            <p>
              Applied my problem-solving abilities to create projects such as
              verifying credit card number accuracy, designing DNA structures
              tailored to scientists' requirements, and developing a simple
              hat-hunting game.
            </p>
            <ProjectJS />
          </section>
          <section className="secThree">
            <p>
              Have a basic understanding of website structure and proficient in
              CSS layout techniques. Always seeking creativity, knowledge, and
              new development techniques.
            </p>
            <img src="/img/portfolio.png" alt="HTML portfolio" />
          </section>
          <Link to="/details-skills" className="nav-link-two">
            <div>
              Details
              <span className="material-symbols-outlined arrow">
                arrow_outward
              </span>
              <span className="more">more</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
