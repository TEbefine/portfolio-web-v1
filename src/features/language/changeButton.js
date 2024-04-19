import React from "react";

export default function ChangeButton({ onLanguageChange }) {
  return (
    <div>
      <button value="UK" onClick={() => onLanguageChange("UK")}>
        <img src="/img/UK.png" alt="english" width="45" height="45" />
      </button>
      <button value="JP" onClick={() => onLanguageChange("JP")}>
        <img src="/img/JP.png" alt="japan" width="45" height="45" />
      </button>
      <button value="TH" onClick={() => onLanguageChange("TH")}>
        <img src="/img/TH.png" alt="thailand" width="45" height="45" />
      </button>
    </div>
  );
}
