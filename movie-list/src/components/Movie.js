import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie, removeMovie, selectFavorites } from "../store/features/favoritesSlice";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w200";

export const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { title, id, poster_path } = movie;

  const handleAddToFavorites = () => {
    dispatch(addMovie(movie));
  };

  const handleRemoveMovie = () => {
    dispatch(removeMovie(movie));
  };


  return (
    <div className="movie-item">
      <div className="movie-poster">
        <img
          src={`${BASE_IMAGE_URL}/${poster_path ?? ""}`}
          alt={`${title} poster`}
        />
      </div>
      <div className="movie-excerpt">
        <h3>{title}</h3>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          View details
        </Link>
        {favorites.find((item) => item.id === movie.id) ? (
          <button className="btn btn-danger" onClick={handleRemoveMovie}>
            Remove from favorites
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={handleAddToFavorites}>
            Add to favorites
          </button>
        )}
      </div>
    </div>
  );
};
