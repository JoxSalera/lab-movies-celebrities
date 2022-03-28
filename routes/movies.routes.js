const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/movies/create", (req, res, next) => {
  res.render("movies/new-movie");
});

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.render("movies/movies", { movies });
  } catch (err) {
    next();
  }
});

router.post("/movies/create", async (req, res, next) => {
  try {
    const moviesToCreate = req.body;
    await Movie.create(moviesToCreate);

    res.redirect("movies");
  } catch {
    res.render("movies/new-movie");
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", { movie });
  } catch {
    next();
  }
});

router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    const celebrities = await Celebrity.find();
    res.render("movies/edit-movie", { movie, celebrities });
  } catch {
    next();
  }
});

router.post("/movies/:id/edit", async (req, res, next) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`movies/${id}`);
  } catch {
    next();
  }
});

router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
  } catch {
    next();
  }
});

module.exports = router;
