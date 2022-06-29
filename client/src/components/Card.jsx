import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ id, image, title, diets }) => {
  return (
    <Link to={`/${id}`} className="card">
      <img src={image} alt="food" className="card__img" />
      <h2>{title}</h2>
      <h3>{diets.map((e) => `${e.toUpperCase()}, `)}</h3>
    </Link>
  );
};
export default Card;
