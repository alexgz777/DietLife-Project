import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getRecipeById } from "../redux/actions";
import "../styles/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipeById(id));
  }, []);
  console.log(recipes);
  return (
    <>
      <Link to="/home" className="detail__btn--back">
        <button>Back</button>
      </Link>
      <div className="detail">
        {recipes.length ? (
          <div className="detail__container">
            <h2 className="detail__h2">{`Title: ${recipes[0].title}`}</h2>
            <h3 className="detail__h3">{`Diets: ${recipes[0].diets} `}</h3>
            <h3 className="detail__h3">{`Summary: ${recipes[0].summary.replace("<b>","")} `}</h3>
            <h3 className="detail__h3">{`Health Score: ${recipes[0].healthScore} % `}</h3>
            <h3 className="detail__h3">{`Steps: ${recipes[0].steps} `}</h3>
            <img src={recipes[0].image} className="detail__img" alt="food" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Detail;
