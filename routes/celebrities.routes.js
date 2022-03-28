const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", async (req, res, next) => {
  try {
    const celebritiesToCreate = req.body;
    await Celebrity.create(celebritiesToCreate);

    res.redirect("/celebrities");
  } catch {
    res.render("/celebrities/new-celebrity");
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    res.render("celebrities/celebrities", { celebrities });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
