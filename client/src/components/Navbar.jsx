import React from "react";
import Searchbar from "./Searchbar";
import "../styles/Navbar.css";
import Dietlife from "../assets/Dietlife.png";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__li">
        <img src={Dietlife} alt="logo" className="navbar__logo" />
        <a href="http://localhost:3000/" className="navbar__btn">
          Start
        </a>
        <a href="http://localhost:3000/home" className="navbar__btn">
          Home
        </a>
        <a href="http://localhost:3000/create" className="navbar__btn">
          Create
        </a>
        <a href="http://localhost:3000/about" className="navbar__btn">
          About Us
        </a>
        <Searchbar/>
      </li>
    </ul>
  );
};
export default Navbar;
