import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  movieForEdit: {},
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state) => {
      state.isOpen = true;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
    setMovieForEdit(state, action) {
      state.movieForEdit = action.payload; // Store movie data
    },
  },
});

export const { openDialog, closeDialog, setMovieForEdit } = dialogSlice.actions;
export default dialogSlice.reducer;
