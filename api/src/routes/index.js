const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

const {
  getRecipes,
  getRecipesById,
  getDiets,
  postRecipe,
} = require("../controllers");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  const request = await getRecipes();
  if (name) {
    const requestByName = request.filter((e) =>
      e.title.toLowerCase().includes(name.toLowerCase())
    );
    requestByName.length
      ? res.status(200).send(requestByName)
      : res.status(400).send(`Error founding ${name}`);
  } else {
    request
      ? res.status(200).send(request)
      : res.status(400).send("Error founding recipes");
  }
});
router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  let response = await getRecipesById(id);

  response
    ? res.status(200).send(response)
    : res.status(400).send(`Error founding recipe ${id}`);
});
router.get("/diets", async (req, res) => {
  try {
    let diets = await getDiets();
    res.status(200).send(diets);
  } catch (error) {
    console.log(error);
  }
});
router.post("/recipes", async (req, res) => {
  try {
    const { title, summary, healthScore, steps, image, diets } = req.body;
    const post = await postRecipe(title, summary, healthScore, steps, image,diets);
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
