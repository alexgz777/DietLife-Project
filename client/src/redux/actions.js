import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPES = "POST_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const ORDER_ALPHA = "ORDER_ALPHA";
export const ORDER_HEALTH = "ORDER_HEALTH";
export const FILTER_DIET = "FILTER_DIET";

export const getRecipes = () => {
  return async (dispatch) => {
    try {
      const recipes = await axios.get("/recipes");
      dispatch({ type: GET_RECIPES, payload: recipes.data });
    } catch (error) {
      console.error("Error to get recipes", error.message);
    }
  };
};

export const getRecipeById = (id) => {
  return async (dispatch) => {
    try {
      const recipe = await axios.get(`/recipes/${id}`);
      dispatch({ type: GET_RECIPE_BY_ID, payload: recipe.data });
    } catch (error) {
      console.error(`Error to get ${id} recipe`, error.message);
    }
  };
};
export const searchRecipe = (title) => {
  return async (dispatch) => {
    try {
      const recipe = await axios.get(
        `/recipes?name=${title}`
      );
      return dispatch({
        type: SEARCH_RECIPE,
        payload: recipe,
      });
    } catch (error) {
      console.error("Error to search recipes", error.message);
    }
  };
};
export const getDiets = () => {
  return async (dispatch) => {
    try {
      const diets = await axios.get("/diets");
      dispatch({ type: GET_DIETS, payload: diets.data });
    } catch (error) {
      console.error("Error to get diets", error.message);
    }
  };
};
export const postRecipes = (data) => {
  return async (dispatch) => {
    try {
      const recipe = await axios.post("/recipes", data);
      dispatch({ type: POST_RECIPES, payload: recipe });
    } catch (error) {
      console.error("Error to post recipes", error.message);
    }
  };
};

export const orderAlpha = (payload) => {
  return { type: ORDER_ALPHA, payload };
};
export const orderHealth = (payload) => {
  return { type: ORDER_HEALTH, payload };
};
export const filterDiet = (payload) => {
  return { type: FILTER_DIET, payload };
};
