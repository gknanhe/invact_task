import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    allMovies: (state, action) => {
      state.movies = action.payload.movies;
    },

    addMovie: (state, action) => {
      state.movies.push(action.payload.newMovie);
    },
    editMovie: (state, action) => {
      const { id, data } = action.payload;
      const index = state.movies.findIndex((movie) => movie._id === id);
      console.log(data, id);
      const movie = data.movie;
      if (index !== -1) {
        state.movies[index] = { ...state.movies[index], ...movie };
      }
    },

    deleteMovie: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.movies = state.movies?.filter((movie) => movie._id !== id);
    },
  },
});

export const { allMovies, editMovie, deleteMovie, addMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;
