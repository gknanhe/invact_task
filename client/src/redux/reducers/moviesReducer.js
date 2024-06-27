import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    allMovies: (state, action) => {
      state.movies = action.payload;
    },

    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    editMovie: (state, action) => {
      const { id, data } = action.payload;

      const index = state.movies.findIndex((movie) => movie.id === id);

      if (index !== -1) {
        state.movies[index] = { ...state.movies[index], data };
      }
    },

    deleteMovie: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.movies = state.movies?.movies.filter((movie) => movie.id !== id);
    },
  },
});

export const { allMovies, editMovie, deleteMovie, addMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;
