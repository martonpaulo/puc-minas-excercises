import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
