import {
  GET_RECIPES,
  GET_RECIPE_BY_ID,
  SEARCH_RECIPE,
  GET_DIETS,
  POST_RECIPES,
  ORDER_ALPHA,
  ORDER_HEALTH,
  FILTER_DIET,
} from "./actions";

const initialState = {
  recipes: [],
  recipesFilter: [],
  diets: [],
};
const reducer = (state = initialState, action) => {
  let recipes = state.recipes;
  let recipesFilter = state.recipesFilter;

  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesFilter: action.payload,
      };
    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipes: action.payload,
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: action.payload,
      };
    case POST_RECIPES:
      return {
        ...state,
      };

    case ORDER_ALPHA:
      let alphaOrdered;
      if (action.payload === "A-z") {
        alphaOrdered = recipes.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
      } else if (action.payload === "Z-a") {
        alphaOrdered = recipes.sort((a, b) => {
          if (a.title < b.title) return 1;
          if (a.title > b.title) return -1;
          return 0;
        });
      } else {
        alphaOrdered = recipes;
      }
      return {
        ...state,
        recipes: alphaOrdered,
      };
    case ORDER_HEALTH:
      let healthOrdered;
      if (action.payload === "healthy") {
        healthOrdered = recipes.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          return 0;
        });
      } else if (action.payload === "unhealthy") {
        healthOrdered = recipes.sort((a, b) => {
          if (a.title < b.title) return 1;
          if (a.title > b.title) return -1;
          return 0;
        });
      } else {
        alphaOrdered = recipes;
      }
      return {
        ...state,
        recipes: healthOrdered,
      };
    case FILTER_DIET:
      let filtered =
        action.payload === "all"
          ? recipesFilter
          : recipesFilter.filter((e) => e.diets.includes(action.payload));
      return {
        ...state,
        recipes: filtered,
      };
    default:
      return state;
  }
};

export default reducer;
