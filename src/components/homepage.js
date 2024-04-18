import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <header>
      <Link to="/pageTwo" className="nav-link">
        Web Tech{" "}
        <img
          src="./img/ArrowOutward.png"
          alt="Arrow Icon"
          width="40"
          height="40"
        />
      </Link>
      <section>
        <h2>Nice to meet YOU</h2>
        <div className="greeting">
          <p>Welcome to TEERA's Portfolio Website.</p>
          <div className="ChangeLanguage">
            <p>Which language would you prefer to use:</p>
            <button>EN</button>
            <button>TH</button>
            <button>JP</button>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HomePage;
