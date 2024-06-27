import mongoose from "mongoose";

//movie schema

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  genre: { type: String, required: true },
  imgUrl: { type: String, required: true },
  rating: { type: Number },
  reviews: { type: String },
  watched: { type: Boolean },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
