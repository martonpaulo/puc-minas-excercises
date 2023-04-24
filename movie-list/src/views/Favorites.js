import { useSelector } from "react-redux";
import { selectFavorites } from "../store/features/favoritesSlice";

export const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <section>
      <div className="container">
        {favorites.length === 0 && <p>No favorites yet</p>}
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
