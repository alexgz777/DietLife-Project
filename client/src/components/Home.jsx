import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Home.css";
import {
  filterDiet,
  getDiets,
  getRecipes,
  orderAlpha,
  orderHealth,
} from "../redux/actions";
import Card from "./Card";
import Pages from "./Pages";

const Home = () => {
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);

  const lastRecipe = currentPage * recipesPerPage;
  const firstRecipe = lastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(firstRecipe, lastRecipe);

  const numberOfRecipes = recipes.length;
  const handleClickPage = (number) => {
    setCurrentPage(number);
  };
  //
  //
  const [order, setOrder] = useState("");
  const handleAlpha = (e) => {
    e.preventDefault();
    dispatch(orderAlpha(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };
  const handleHealt = (e) => {
    e.preventDefault();
    dispatch(orderHealth(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  };
  const handleDiet = (e) => {
    dispatch(filterDiet(e.target.value.toLowerCase()));
  };
  //
  return (
    <>
      <div className="filterPages">
        <form className="filters">
          <>
            <>
              <label>Filter by Type of Diet:</label>
              <select
                className="container__select"
                onChange={(e) => handleDiet(e)}
              >
                <option className="container__option" name="All" value="All">
                  All
                </option>
                {diets?.map((e) => {
                  return (
                    <option
                      className="container__option"
                      name={e.name}
                      key={e.id}
                      value={e.name}
                    >
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </>
            <label>Order Alphabetically:</label>
            <select
              className="container__select"
              onChange={(e) => handleAlpha(e)}
            >
              <option name="--" value="--">
                --
              </option>
              <option name="A-z" value="A-z">
                A-z
              </option>
              <option name="Z-a" value="Z-a">
                Z-a
              </option>
            </select>
          </>
          <>
            <label>Order by Health Score:</label>
            <select
              className="container__select"
              onChange={(e) => handleHealt(e)}
            >
              <option name="--" value="--">
                --
              </option>
              <option name="healthy" value="healthy">
                healthy
              </option>
              <option name="unhealthy" value="unhealthy">
                unhealthy
              </option>
            </select>
          </>
        </form>
        <Pages
          recipesPerPage={recipesPerPage}
          numberOfRecipes={numberOfRecipes}
          handleClickPage={handleClickPage}
        />
      </div>
      <div className="home__recipes">
        {currentRecipes?.map((e) => {
          return (
            <Card
              id={e.id}
              key={e.id.toString()}
              image={e.image}
              title={e.title}
              diets={e.diets}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
