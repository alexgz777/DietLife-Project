import React from "react";
import Searchbar from "./Searchbar";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import dietlife from "../assets/dietlife.png";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__li">
        <img src={dietlife} alt="logo" className="navbar__logo" />
        <Link to={`/`} className="navbar__btn">
          Start
        </Link>
        <Link to={`/home`} className="navbar__btn">
          Home
        </Link>
        <Link to={`create`} className="navbar__btn">
          Create
        </Link>
        <Link to={`/about`} className="navbar__btn">
          About Us
        </Link>
        <Searchbar />
      </li>
    </ul>
  );
};
export default Navbar;
