import { useLocation } from 'react-router-dom';
import { Link } from "react-router";
import Button from "react-bootstrap/Button";

function IndividualMovie() {
  const location = useLocation(); // Hook de react-router para acceder a parámetros de la URL
  const { movie } = location.state?.movie || {};

  return (
    <div className="individual">
      <div className="individual__buttons d-flex justify-content-start">
        <Button variant="danger" className="individual__button-button mx-2">
          <Link to="/" className="nav-link active">
            Regresar
          </Link>
        </Button>
        <Button variant="dark" className="individual__button-button mx-2">
          <Link
            to="/movements"
            state={{ movieMovement: movie, movementType: 'Renta' }}
            className="nav-link active"
          >
            Rentar
          </Link>
        </Button>
        <Button variant="dark" className="individual__button-button mx-2">
          <Link
            to="/movements"
            state={{ movieMovement: movie, movementType: 'Compra' }}
            className="nav-link active"
          >
            Comprar
          </Link>
        </Button>
      </div>

      <div className="individual__movie pt-5">
        <h1 className="individual__movie-title pb-4">{movie.name}: {movie.yearOfPublication}</h1>
        <div className="individual__movie__container container-fluid">
          <div className="individual__movie__container__row row">
            <div className="individual__movie__container__row__col col-3 d-flex justify-content-center align-self-center">
              <img src={movie.image} alt={movie.name} className="individual__container__row__col-image" />
            </div>
            <div className="individual__container__row__col-information col-9 align-self-center">
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Año de publicación:</strong> {movie.yearOfPublication}</p>
              <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
              <p><strong>Reseñas:</strong> {movie.reviews}</p>
              <p><strong>Duración:</strong> {movie.duration}</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-center pt-4">
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default IndividualMovie;
