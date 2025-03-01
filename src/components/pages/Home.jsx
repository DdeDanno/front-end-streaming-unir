import CarouselMovies from "../shared/CarouselMovies";
import MovieCard from "../shared/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState({
        name: "",
        director: "",
        yearOfPublication: "",
        genre: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuery((prevQuery) => ({
            ...prevQuery,
            [name]: value,
        }));
    };

    const handleFilter = async () => {
        try {
            const response = await axios.get(`${API_URL}/search-microservice/elastic/movies`, {
                params: query,
            });
            setMovies(response.data);
        } catch (error) {
            console.error("Error fetching movies with filters:", error);
        }
    };

    // Fetch movies on initial load
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/search-microservice/elastic/movies`);
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
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

            <h3>Prueba nuestros filtros inteligentes</h3>
            <div className="home__filters mt-4">
                <div className="home__filters__container">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Filtrar por género..."
                        name="genre"
                        value={query.genre}
                        onChange={handleInputChange}
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Filtrar por año de estreno..."
                        name="yearOfPublication"
                        value={query.yearOfPublication}
                        onChange={handleInputChange}
                    />

                    <button
                        className="btn btn-primary w-100"
                        onClick={handleFilter}
                    >
                        Filtrar
                    </button>
                </div>
            </div>

            <h3>¿No encuentras lo que buscas?</h3>

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