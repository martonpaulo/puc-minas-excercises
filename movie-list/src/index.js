import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";

import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import { Favorites } from "./views/Favorites";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/movie/:id", element: <MovieDetail /> },
      { path: "favorites", element: <Favorites /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
