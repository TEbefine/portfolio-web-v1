import React from "react";

export default function ChangeButton({ onLanguageChange, language }) {
  return (
    <div className="languageButton" id={language + "Button"}>
      <button value="UK" onClick={() => onLanguageChange("UK")}>
        <img src="/img/UK.png" alt="english" width="30" height="30" />
      </button>
      <button value="JP" onClick={() => onLanguageChange("JP")}>
        <img src="/img/JP.png" alt="japan" width="30" height="30" />
      </button>
      <button value="TH" onClick={() => onLanguageChange("TH")}>
        <img src="/img/TH.png" alt="thailand" width="30" height="30" />
      </button>
    </div>
  );
}
