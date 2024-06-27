import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./reducers/dialogReducer";
import moviesReducer from "./reducers/moviesReducer";

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    movies: moviesReducer,
  },
});
