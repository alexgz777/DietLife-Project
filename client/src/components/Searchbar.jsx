import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../redux/actions";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setRecipe(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipe(recipe));
  };
  return (
    <>
      <input
        className="searchbar__input"
        type="text"
        name="input"
        placeholder="What recipe do you search?"
        value={recipe.input}
        onChange={(e) => handleInput(e)}
      />
      <button
        className="searchbar__btn"
        type="submit"
        onClick={(e) => handleSearch(e)}
      >
        Search
      </button>
    </>
  );
};
export default Searchbar;
