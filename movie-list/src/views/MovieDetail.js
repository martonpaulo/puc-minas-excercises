import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await MoviesService.getMovieDetail(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  return (
    <section className="movie-detail">
      <div className="container">
        <div className="row gx-5">
          <div className="col-4">
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={`Poster for the movie ${movie.title}`}
            />
          </div>
          <div className="col-8">
            <h1>{movie.title}</h1>
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original Language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
            </ul>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
