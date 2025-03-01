import Carousel from 'react-bootstrap/Carousel';

function CarouselMovies ({movies}) {
  return (
    <Carousel data-bs-theme="ligth" className="carousel">
      {movies.map(movie => (
        <Carousel.Item className="carousel__item" key={movie.id}>
          <img
            className="carousel__item-image d-block w-100"
            src={movie.image}
            alt={movie.name}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselMovies;
