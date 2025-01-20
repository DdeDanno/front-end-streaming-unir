import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router";

function MovieCard ({movie, state}) {
  return (
    <Card className="card h-100">
      <Card.Body className="card__body">
        <Card.Title className="card__body-title pt-3 pb-3 justify-content-center d-flex">
          {movie.name}</Card.Title>
        <div className="card__body__container d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={movie.image}
            className="card__body__container-image"
          />
        </div>
        {state !== 'movement' && state !== null && (
          <div className="card__body__btn d-flex justify-content-center mt-5 mb-3">
            <Button variant="dark" className="movie-card__button">
              <Link
                to="/individual"
                state={{ movie: { movie } }}
                className="card__body__btn-button nav-link active"
              >
                Ver más acerca de la película
              </Link>
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  )
}

export default MovieCard;
