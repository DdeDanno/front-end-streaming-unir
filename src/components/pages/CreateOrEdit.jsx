import { useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Asegúrate de usar 'react-router-dom'

function CreateOrEdit() {
    const location = useLocation();
    const movie = location.state?.movie;  // Obtén el objeto movie desde el estado
    const [name, setName] = useState(movie?.name || "");
    const [director, setDirector] = useState(movie?.director || "");
    const [yearOfPublication, setYearOfPublication] = useState(movie?.yearOfPublication || "");
    const [synopsis, setSynopsis] = useState(movie?.synopsis || "");
    const [reviews, setReviews] = useState(movie?.reviews || "");
    const [duration, setDuration] = useState(movie?.duration || "");
    const [image, setImage] = useState(movie?.image || "");
    const [trailer, setTrailer] = useState(movie?.trailer || "");
    const [genre, setGenre] = useState(movie?.genre || "");
    const [rentPrice, setRentPrice] = useState(movie?.rentPrice || "");
    const [buyPrice, setBuyPrice] = useState(movie?.buyPrice || "");
    const navigate = useNavigate();  // Para redirigir al administrador después de editar

    const handleNameChange = (e) => setName(e.target.value);
    const handleDirectorChange = (e) => setDirector(e.target.value);
    const handleYearOfPublicationChange = (e) => setYearOfPublication(e.target.value);
    const handleSynopsisChange = (e) => setSynopsis(e.target.value);
    const handleReviewsChange = (e) => setReviews(e.target.value);
    const handleDurationChange = (e) => setDuration(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);
    const handleTrailerChange = (e) => setTrailer(e.target.value);
    const handleGenreChange = (e) => setGenre(e.target.value);
    const handleRentPriceChange = (e) => setRentPrice(e.target.value);
    const handleBuyPriceChange = (e) => setBuyPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const API_URL = process.env.REACT_APP_API_URL;
            let response;

            if (movie?.id) {
                // Si movie tiene un id, es una actualización (PUT)
                response = await axios.put(`${API_URL}/search-microservice/elastic/movies/${movie.id}`, {
                    name,
                    director,
                    yearOfPublication,
                    synopsis,
                    reviews,
                    duration,
                    image,
                    trailer,
                    genre,
                    rentPrice,
                    buyPrice
                });
                console.log("Película actualizada:", response.data);
            } else {
                response = await axios.post(`${API_URL}/search-microservice/elastic/movies`, {
                    name,
                    director,
                    yearOfPublication,
                    synopsis,
                    reviews,
                    duration,
                    image,
                    trailer,
                    genre,
                    rentPrice,
                    buyPrice
                });
                console.log("Película creada:", response.data);
            }

            navigate("/admin");
        } catch (error) {
            console.error("Error al guardar la película:", error);
        }
    };

    return (
        <div className="movie-edit">
            <h1>{movie?.id ? "Editar Película" : "Crear Película"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="movieName" className="form__fields-label">Nombre de la película</label>
                    <input
                        type="text"
                        className="form-control"
                        id="movieName"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Ingresa el nombre de la película"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="movieDirector" className="form__fields-label">Director</label>
                    <input
                        type="text"
                        className="form-control"
                        id="movieDirector"
                        value={director}
                        onChange={handleDirectorChange}
                        placeholder="Ingresa el nombre del director"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="yearOfPublication" className="form__fields-label">Año de publicación</label>
                    <input
                        type="number"
                        className="form-control"
                        id="yearOfPublication"
                        value={yearOfPublication}
                        onChange={handleYearOfPublicationChange}
                        placeholder="Ingresa el año de publicación"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="synopsis" className="form__fields-label">Sinopsis</label>
                    <textarea
                        className="form-control"
                        id="synopsis"
                        value={synopsis}
                        onChange={handleSynopsisChange}
                        placeholder="Ingresa la sinopsis de la película"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reviews" className="form__fields-label">Reseñas</label>
                    <textarea
                        className="form-control"
                        id="reviews"
                        value={reviews}
                        onChange={handleReviewsChange}
                        placeholder="Ingresa las reseñas de la película"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="duration" className="form__fields-label">Duración (minutos)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="duration"
                        value={duration}
                        onChange={handleDurationChange}
                        placeholder="Ingresa la duración en minutos"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form__fields-label">Imagen</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={handleImageChange}
                        placeholder="Ingresa la URL de la imagen"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="trailer" className="form__fields-label">Enlace al trailer</label>
                    <input
                        type="text"
                        className="form-control"
                        id="trailer"
                        value={trailer}
                        onChange={handleTrailerChange}
                        placeholder="Ingresa la URL del trailer"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre" className="form__fields-label">Género</label>
                    <input
                        type="text"
                        className="form-control"
                        id="genre"
                        value={genre}
                        onChange={handleGenreChange}
                        placeholder="Ingresa el género de la película"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rentPrice" className="form__fields-label">Precio de renta</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rentPrice"
                        value={rentPrice}
                        onChange={handleRentPriceChange}
                        placeholder="Ingresa el precio de renta"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="buyPrice" className="form__fields-label">Precio de compra</label>
                    <input
                        type="number"
                        className="form-control"
                        id="buyPrice"
                        value={buyPrice}
                        onChange={handleBuyPriceChange}
                        placeholder="Ingresa el precio de compra"
                    />
                </div>

                <Button variant="primary" type="submit" className="mt-3">
                    {movie?.id ? "Editar" : "Crear"}
                </Button>
                <Button variant="danger" className="individual__button-button mx-2 mt-3">
                    <Link to="/admin" className="nav-link active">
                        Regresar
                    </Link>
                </Button>
            </form>
        </div>
    );
}

export default CreateOrEdit;
