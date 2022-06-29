const axios = require("axios");
const URL = "https://api.spoonacular.com/recipes/";
const { Recipe, Diet } = require("../db");

const getRecipesByApi = async () => {
  try {
    const request = await axios
      .get(
        `${URL}complexSearch?apiKey=${process.env.DB_API_KEY}&addRecipeInformation=true`
      )
      .then((res) => res.data.results);

    return request.map((e) => {
      return {
        id: e.id,
        image: e.image,
        title: e.title,
        diets: e.diets.map((f) => f),
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const getRecipesByDb = async () => {
  try {
    const request = await Recipe.findAll();
    return request;
  } catch (error) {
    console.log(error);
  }
};

const getRecipes = async () => {
  try {
    const api = await getRecipesByApi();
    const db = await getRecipesByDb();

    return [...api, ...db];
  } catch (error) {
    console.log(error);
  }
};

const getRecipesByIdAPI = async (id) => {
  try {
    const data = [];
    const request = await axios
      .get(`${URL}${id}/information?apiKey=${process.env.DB_API_KEY}`)
      .then((res) => res.data);
    data.push(request);
    return data.map((e) => {
      return {
        id: e.id,
        image: e.image,
        title: e.title,
        dishTypes: e.dishTypes.map((f) => f),
        diets: e.diets.map((f) => f),
        summary: e.summary,
        healthScore: e.healthScore,
        steps: e.instructions,
      };
    });
  } catch (error) {
    console.log(error);
  }
};

const getRecipesById = async (id) => {
  try {
    const api = await getRecipesByIdAPI(id);
    return api;
  } catch (error) {
    console.log(error);
  }
};

const getDiets = async () => {
  try {
    const diets = [
      { name: "Gluten Free" },
      { name: "Ketogenic" },
      { name: "Vegetarian" },
      { name: "Lacto-Vegetarian" },
      { name: "Ovo-Vegetarian" },
      { name: "Vegan" },
      { name: "Pescetarian" },
      { name: "Paleo" },
      { name: "Primal" },
      { name: "Low FODMAP" },
      { name: "Whole30" },
    ];
    const AddFindDiets = () => {
      diets.forEach((e) => {
        Diet.findOrCreate({
          where: { name: e.name },
        });
      });
    };
    AddFindDiets();

    const FindDiets = await Diet.findAll();
    return FindDiets;
  } catch (error) {
    console.log(error);
  }
};

const postRecipe = async (
  title,
  summary,
  healthScore,
  steps,
  image,
  dietTypes
) => {
  try {
    const recipe = await Recipe.create({
      title,
      summary,
      healthScore,
      steps,
      image,
    });
    const diets = await Diet.findAll({
      where: {
        name: dietTypes,
      },
    });
    recipe.addDiet(diets);
    return "The recipe was posted succesfully";
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRecipes,
  getRecipesById,
  getDiets,
  postRecipe,
};
