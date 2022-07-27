import React from "react";
import Searchbar from "./Searchbar";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
/* import Dietlife from "../assets/Dietlife.png";
 */
const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__li">
        {/*         <img src={Dietlife} alt="logo" className="navbar__logo" />
         */}{" "}
        <Link to={`${process.env.VITE_API_KEY}`} className="navbar__btn">
          <button>Start</button>
        </Link>
        <Link to={`${process.env.VITE_API_KEY}/home`} className="navbar__btn">
          <button>Home</button>
        </Link>
        <Link to={`${process.env.VITE_API_KEY}/create`} className="navbar__btn">
          <button>Create</button>
        </Link>
        <Link to={`${process.env.VITE_API_KEY}/about`} className="navbar__btn">
          <button> About Us</button>
        </Link>
        <Searchbar />
      </li>
    </ul>
  );
};
export default Navbar;
