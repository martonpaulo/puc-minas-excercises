import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "favorites",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie(state, { payload }) {
      state.movies.push(payload);
    },
    removeMovie(state, { payload }) {
      const newMovies = state.movies.filter((movie) => movie.id !== payload.id);
      state.movies = newMovies;
    },
  },
});

export const { addMovie, removeMovie } = slice.actions;

export const selectFavorites = (state) => state.favorites.movies;

export default slice.reducer;
