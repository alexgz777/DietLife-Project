import React from "react";
import "../styles/Pages.css";

const Pages = ({ recipesPerPage, numberOfRecipes, handleClickPage }) => {
  const numberOfPages = [];
  for (let i = 1; i < Math.ceil(numberOfRecipes / recipesPerPage); i++) {
    numberOfPages.push(i);
  }

  return (
    <ul className="pages__ul">
      <li className="pages__li">
        {numberOfPages?.map((number) => {
          return (
            <button
              className="pages__btn"
              onClick={() => handleClickPage(number)}
              key={number}
            >
              {number}
            </button>
          );
        })}
      </li>
    </ul>
  );
};

export default Pages;
