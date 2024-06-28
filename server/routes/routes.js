import express from "express";
import Movie from "../modal/moviesModa.js";
const router = express.Router();

// Get all movies
router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();

    return res.status(200).json({ movies });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "something went wrong",
      success: false,
    });
  }
});

// Add a new movie
router.post("/movies/add", async (req, res) => {
  const moviedata = new Movie(req.body.movieData);
  console.log(moviedata);
  try {
    const newMovie = new Movie(moviedata);

    await newMovie.save();

    return res.status(200).json({ newMovie });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "something went wrong",
      success: false,
    });
  }
});

// Update a movie
router.put("/movies/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    console.log(movieId, req.body);

    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ error: "movie not found" });
    }

    movie.title = req.body.title;
    movie.description = req.body.description;
    movie.releaseYear = req.body.releaseYear;
    movie.genre = req.body.genre;
    movie.imgUrl = req.body.imgUrl;
    movie.rating = req.body.rating;
    movie.reviews = req.body.reviews;

    await movie.save();

    return res.status(200).json({
      movie,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
      message: "something went wrong",
      success: false,
    });
  }
});

// Delete a movie
router.delete("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted" }); // Send response once
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" }); // More descriptive error message
  }
});

export default router;
