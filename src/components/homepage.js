import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <header>
      <nav>
        <Link to="/pageTwo">Web Tech</Link>
      </nav>
      <section>
        <h2>Nice to meet YOU</h2>
        <p>
          Welcome to <h1>TEERA's Portfolio Website</h1>.
        </p>
        <p>Which language would you prefer to use:</p>
        <div>
          <button>EN</button>
          <button>TH</button>
          <button>JP</button>
        </div>
      </section>
    </header>
  );
}

export default HomePage;
