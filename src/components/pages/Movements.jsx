import { useLocation } from "react-router-dom";
import MovieCard from "../shared/MovieCard";
import MovementForm from "../shared/MovementForm";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";

function Movements() {
    const location = useLocation();
    const { movieMovement, movementType } = location.state || {};

    const price = movementType === "Renta" ? movieMovement.rentPrice : movieMovement.buyPrice;
    const movieId = movieMovement.id;

    return (
        <div className="movements container-fluid">
            <Button variant="danger" className="movie-card__button">
                <Link to="/" className="card__body__btn-button nav-link active">
                    CANCELAR
                </Link>
            </Button>
            <h2 className="movements-title pb-5">La operación que vas a realizar es: {movementType}</h2>
            <div className="movements__row row">
                <div className="movements__row__col col-3">
                    <MovieCard movie={movieMovement} state={'movement'} />
                </div>
                <div className="movements__form__col col-9 p-5">
                    <h4 className="movements__row__form-title">Formulario</h4>
                    <MovementForm
                        className="movements__row__form-movementform"
                        movementType={movementType}
                        price={price}
                        movieId={movieId}
                    />
                </div>
            </div>
        </div>
    );
}

export default Movements;
