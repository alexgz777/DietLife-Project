import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";
/* import dietlife from "../assets/dietlife.png";
 */
const Landing = () => {
  const title = "Do you wanna eat healthy? ";
  const subtitle = "We are here to help you ";
  const degTitle = 180 / title.length;
  const degSubtitle = 180 / subtitle.length;

  let titleMod = title.split("").map((e, i) => (
    <span
      className="spinning-title-span"
      key={i}
      style={{ transform: `rotate(${degTitle * i - 90}deg)` }}
    >
      {e}
    </span>
  ));
  let subMod = subtitle.split("").map((e, i) => (
    <span
      className="spinning-sub-span"
      key={i}
      style={{ transform: `rotate(${degSubtitle * i + 90}deg)` }}
    >
      {e}
    </span>
  ));

  return (
    <div className="landing">
      <Link to={"/home"}>
        <div className="landing-text-wrapper">
          <div className="spinning-title">
            <p>{titleMod}</p>
          </div>
          <img
            src="../assets/dietlife"
            alt="logo"
            className="landing__logo"
          />
          <div className="spinning-sub">
            <p>{subMod}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Landing;
