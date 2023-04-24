import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { Movie } from "../components/Movie";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [columnSizeClassName, setColumnSizeClassName] = useState("col-3");

  const getMovies = async () => {
    const {
      data: { results },
    } = await MoviesService.getMovies();
    setMovies(results);
  };

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setColumnSizeClassName("col-12");
    } else if (window.innerWidth <= 1000) {
      setColumnSizeClassName("col-6");
    } else {
      setColumnSizeClassName("col-3");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <div className="row gy-5">
        {movies.map((movie) => (
          <div key={movie.id} className={columnSizeClassName}>
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
