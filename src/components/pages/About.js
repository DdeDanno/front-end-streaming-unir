import CarouselMovies from "../shared/CarouselMovies";
import { useEffect, useState } from "react";
import { getMovies } from "../../api/dbUtils";

function About() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchedMovies = getMovies();
    setMovies(fetchedMovies);
  }, []);

  return (
    <div className="about">
      <h3 className="about__title">Sobre Nosotros - CineFlix</h3>
      <p className="about__text">
        ¡Bienvenido a CineFlix, tu plataforma de streaming online favorita! Nuestro objetivo es ofrecerte acceso a un amplio catálogo de películas y documentales cuidadosamente seleccionados, para que disfrutes de una experiencia única sin salir de casa.
        Aunque no transmitimos películas completas, te damos la oportunidad de explorar los tráilers más emocionantes y decidir si deseas alquilar o comprar la película de tu elección. Nos encanta el cine tanto como tú, y estamos comprometidos a proporcionarte contenido de alta calidad que se adapte a tus gustos e intereses.
      </p>
      <h3 className="about__subtitle">Nuestra Misión</h3>
      <p className="about__text">
        En CineFlix, creemos que el cine es más que entretenimiento; es una ventana a diferentes culturas, historias y emociones. Nuestra misión es acercarte a este mundo mágico ofreciéndote una plataforma intuitiva y accesible, donde descubrir películas increíbles sea tan fácil como un clic.
      </p>
      <h3 className="about__subtitle">Lo Que Ofrecemos</h3>
      <ul className="about__list">
        <li className="about__list-item">Catálogo Extenso: Películas y documentales de diferentes géneros, épocas y culturas.</li>
        <li className="about__list-item">Detalles Completos: Información detallada de cada película: sinopsis, críticas, duración, año, director, actores, idioma y más.</li>
        <li className="about__list-item">Tráilers de YouTube: Ve los avances de cada película para que sepas qué esperar antes de alquilar o comprar.</li>
        <li className="about__list-item">Alquiler Flexible: Alquila películas por un tiempo determinado y disfruta desde la comodidad de tu hogar.</li>
        <li className="about__list-item">Compras Sin Límites: Adquiere tus películas favoritas y míralas cuando quieras.</li>
      </ul>
      <h3 className="about__subtitle">¿Por Qué Elegir CineFlix?</h3>
      <ul className="about__list">
        <li className="about__list-item">Buscador Avanzado: Encuentra películas fácilmente usando filtros como nombre, sinopsis, categoría, año, director, idioma o actores.</li>
        <li className="about__list-item">Facilidad de Uso: Una interfaz amigable que hace que alquilar o comprar películas sea rápido y sencillo.</li>
        <li className="about__list-item">Pasión Por el Cine: Somos cinéfilos apasionados que trabajan para brindarte una experiencia memorable.</li>
      </ul>
      <div className="about__carousel">
        <CarouselMovies movies={movies} />
      </div>
    </div>
  );
}

export default About;
