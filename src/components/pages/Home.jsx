import CarouselMovies from "../shared/CarouselMovies";
import MovieCard from "../shared/MovieCard";
import {getMovies} from "../../api/dbUtils";
import {useEffect, useState} from "react";
import SearchHook from "../shared/SearchHook";
import axios from "axios";

function Home () {
    const API_URL = process.env.REACT_APP_API_URL;
    const [movies, setMovies] = useState([]);
  const { searchQuery, filteredMovies, handleSearchChange } = SearchHook();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/search-microservice/elastic/movies`);
                setMovies(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        if (API_URL) fetchMovies();
    }, [API_URL]);

    return (
    <div className="home p-3">
      <div className="home__content">
        <h2 className="home__content-title">
          ¡Bienvenido a CineFlix!
        </h2>
        <p className="home__description">
          Somos la mejor página de streaming, podrás encontrar una gran variedad de películas a tu alcance, solo con un click.
        </p>
      </div>
      <div className="home__carousel pt-4">
        <h5 className="home__carousel-title justify-content-center d-flex">¡Agregados recientemente!</h5>
        <CarouselMovies movies={movies} />
      </div>
      <div className="home__search-bar mb-4 mt-4">
        <input
          type="text"
          className="home__search-input form-control"
          placeholder="Buscar películas por nombre..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="home__cards pt-5">
        <div className="home__cards__container container">
          <div className="home__cards__container__row row d-flex justify-content-between">
            {movies.map((movie, index) => (
              <div key={index} className="home__cards__container__row-card col-12 col-sm-6 col-md-4 mb-4">
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
