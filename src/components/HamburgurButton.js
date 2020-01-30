import React from "react";
import "../scss/HamburgerButton.scss";

export default function HamburgurButton(props) {
  const toggleMenu = () => {
    props.toggleMenu();
  };

  return (
    <button onClick={toggleMenu} className="hamburger-button">
      <div className="hamburger-button__top-line"></div>
      <div className="hamburger-button__mid-line"></div>
      <div className="hamburger-button__bot-line"></div>
    </button>
  );
}
