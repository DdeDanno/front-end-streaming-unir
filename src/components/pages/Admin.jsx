import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Asegúrate de usar "react-router-dom" en lugar de "react-router"
import Button from "react-bootstrap/Button";

function Admin() {
    const API_URL = process.env.REACT_APP_API_URL;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/search-microservice/elastic/movies`);
                setMovies(response.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        if (API_URL) fetchMovies();
    }, [API_URL]);

    const handleDelete = async (movieId) => {
        try {
            const response = await axios.delete(`${API_URL}/search-microservice/elastic/movies/${movieId}`);
            console.log("Película eliminada:", response.data);
            setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
        } catch (error) {
            console.error("Error eliminando la película:", error);
        }
    };

    return (
        <div className="history px-5">
            <table className="history__table table table-dark table-striped">
                <thead className="history__table-head">
                <tr className="history__table-row">
                    <th scope="col" className="history__table-header">ID</th>
                    <th scope="col" className="history__table-header">Nombre</th>
                    <th scope="col" className="history__table-header">Director</th>
                    <th scope="col" className="history__table-header">Año de publicación</th>
                    <th scope="col" className="history__table-header">Duración</th>
                    <th scope="col" className="history__table-header">Acciones</th>
                </tr>
                </thead>
                <tbody className="history__table-body">
                {movies.map((entry) => (
                    <tr key={entry.id} className="history__table-row">
                        <th scope="row" className="history__table-data">{entry.id}</th>
                        <td className="history__table-data">{entry.name}</td>
                        <td className="history__table-data">{entry.director}</td>
                        <td className="history__table-data">{entry.yearOfPublication}</td>
                        <td className="history__table-data">{entry.duration}</td>
                        <td className="history__table-data">
                            <Button variant="dark" className="movie-card__button">
                                <Link
                                    to="/editMovie"
                                    state={{ movie: entry }}  // Pasa directamente el objeto entry
                                    className="card__body__btn-button nav-link active"
                                >
                                    Editar
                                </Link>
                            </Button>
                            -o-
                            <Button
                                variant="danger"
                                className="movie-card__button"
                                onClick={() => handleDelete(entry.id)}  // Llama a la función handleDelete al hacer clic
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to="/editMovie" state={{ movie: { id: "", name: "", director: "", yearOfPublication: "", duration: "", synopsis: "", reviews: "", genre: "", rentPrice: "", buyPrice: "", image: "", trailer: "" } }}>
                <Button
                    variant="info"
                    className="movie-card__button"
                >
                    Nueva película
                </Button>
            </Link>
        </div>
    );
}

export default Admin;
