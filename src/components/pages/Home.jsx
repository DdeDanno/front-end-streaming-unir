import CarouselMovies from "../shared/CarouselMovies";
import MovieCard from "../shared/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [movies, setMovies] = useState([]);
    const [suggestions, setSuggestions] = useState([]); // Estado para almacenar las sugerencias
    const [query, setQuery] = useState({
        name: "",
        director: "",
        yearOfPublication: "",
        genre: "",
    });

    // Maneja el cambio en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuery((prevQuery) => ({
            ...prevQuery,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/search-microservice/elastic/movies`); // Asegúrate de que la ruta sea la correcta
                setMovies(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchMovies();
    }, [API_URL]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            let queryString = "";

            if (query.director) {
                queryString = `director?query=${query.director}`;
            }
            else if (query.name) {
                queryString = `name?query=${query.name}`;
            }

            if (queryString) {
                try {
                    const response = await axios.get(`${API_URL}/search-microservice/elastic/movies/${queryString}`);
                    setSuggestions(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error("Error fetching suggestions:", error);
                }
            } else {
                setSuggestions([]);
            }
        };

        if (query.director || query.name) {
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [query.director, query.name, API_URL]);

    const handleFilter = async () => {
        try {
            const { genre, yearOfPublication } = query;
            let url = `${API_URL}/search-microservice/elastic/movies?`;

            if (genre) url += `genre=${genre}&`;
            if (yearOfPublication) url += `yearOfPublication=${yearOfPublication}&`;

            const response = await axios.get(url);
            setMovies(response.data);
            console.log(response.data);

        } catch (error) {
            console.error("Error fetching movies with filters:", error);
        }
    };

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
                        className="btn btn-primary w-100 mt-3"
                        onClick={handleFilter}
                    >
                        Filtrar
                    </button>
                </div>
            </div>
            <h3>¿No encuentras lo que buscas? Prueba nuestra búsqueda predictiva</h3>

            <div className="home__filters mt-4">
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Filtrar por nombre..."
                    name="name"
                    value={query.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Filtrar por director..."
                    name="director"
                    value={query.director}
                    onChange={handleInputChange}
                />
            </div>
            {suggestions.length > 0 && (
                <div className="home__suggestions mt-4">
                    <h4>Quizá quieres buscar...</h4>
                    <ul>
                        {suggestions.map((suggestion, index) => (
                            <li key={index} className="text-white">{suggestion}</li>
                        ))}
                    </ul>
                </div>
            )}

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
