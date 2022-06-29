import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDiets, postRecipes } from "../redux/actions";
import "../styles/Create.css";

const Create = () => {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const initialState = {
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: [],
  };
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState({});

  const validate = (input) => {
    const errors = {};
    if (!input.title) {
      errors.name = "Should write a title";
    }
    if (!input.summary) {
      errors.summary = "Should write a recipe summary";
    }
    if (!input.healthScore) {
      errors.healthScore = "Please move the health score switch";
    }
    if (!input.steps) {
      errors.steps = "Should write steps";
    }
    if (!input.diets.length === 0) {
      errors.diets = "Should choose a type of diet";
    }
    return errors;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(form));
    setForm(true);

    dispatch(postRecipes(form));
    alert("Your recipe was posted succesfully");
    setForm(initialState);
  };
  return (
    <div className="create">
      <Link to="/home">
        <button className="create__btn--back">Back</button>
      </Link>
      <form className="create__form">
        <h1>Create your own dish!</h1>
        <div className="form__container">
          <label>Title:</label>
          <input
            value={form.name}
            name="title"
            placeholder="type a title.."
            onChange={(e) => handleChange(e)}
          />
          <p>{error.name}</p>
        </div>
        <div className="form__container">
          <label>Dish Summary:</label>
          <input
            value={form.summary}
            name="summary"
            placeholder="write a dish summary.."
            onChange={(e) => handleChange(e)}
          />
          <p>{error.summary}</p>
        </div>

        <div className="form__container--range">
          <label>Health Score:</label>
          <input
            value={form.healthScore}
            name="healthScore"
            onChange={(e) => handleChange(e)}
            type="range"
            id="healthScore"
            min="0"
            max="100"
            step="5"
          />
          <output name="result" for="healthScore">
            {`${form.healthScore}%`}
          </output>
          <p>{error.healthScore}</p>
        </div>
        <div className="form__container">
          <label>Step by Step:</label>
          <input
            value={form.steps}
            name="steps"
            placeholder="write a the recipe steps.."
            onChange={(e) => handleChange(e)}
          />
          <p>{error.steps}</p>
        </div>
        <div className="form__container">
          <label>Image:</label>
          <input
            value={form.image}
            name="image"
            placeholder="write the url of an image of your recipe.."
            onChange={(e) => handleChange(e)}
          />
          <p>{error.steps}</p>
        </div>
        <div className="form__container">
          <label>Type of Diet:</label>
          <select>
            {diets.map((e) => {
              return (
                <option
                  key={e.id}
                  value={form.diets}
                  name="diets"
                  placeholder="choose diets.."
                  onChange={(e) => handleChange(e)}
                >
                  {e.name}
                </option>
              );
            })}
          </select>
          <p>{error.diets}</p>
        </div>
        <button className="button__post" onClick={(e) => handleSubmit(e)}>
          Post the recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
