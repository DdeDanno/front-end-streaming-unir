let movies = [
  {"id":  1,
    "name":  "Venom: The Last Dance",
    "director":  "Kelly Marcel",
    "yearOfPublication": "2024",
    "synopsis": "Eddie y Venom están huyendo. Perseguidos por sus dos mundos y con la red cerrándose, el dúo se ve obligado a tomar una decisión devastadora que echará el telón al último baile de Venom y Eddie.",
    "reviews":  "Una despedida realmente emocionante, por ahora, Venom: The Last Dance trae de vuelta a Eddie y Venom para un tete-a-tete final que es hilarante y está lleno de vibraciones de los 90. ¡Quédate para la escena post-créditos!",
    "duration":  "180",
    "image":  "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" ,
    "trailer":  "https://www.youtube.com/embed/__2bjWbetsA?si=GDeEJIINKTQeg951"
  },
  {"id":  2,
    "name":  "NOSFERATU",
    "director":  "Robert Eggers",
    "yearOfPublication": "2024",
    "synopsis": "Una mujer es perseguida por un antiguo vampiro de Transilvania, que trae consigo un horror indecible.",
    "reviews":  "Maravillosamente orquestada por el director Robert Eggers, Nosferatu es una película de terror gigante que es a la vez repulsiva y seductora.",
    "duration":  "160",
    "image":  "https://pics.filmaffinity.com/nosferatu-964410519-large.jpg" ,
    "trailer":  "https://www.youtube.com/embed/iEbp8QMGzP0?si=P5fT9KjobhPgcBqw"
  },
  {"id":  3,
    "name":  "Mufasa",
    "director":  "Barry Jenkins",
    "yearOfPublication": "2024",
    "synopsis": "Explorando el improbable ascenso del amado rey de las Tierras del Orgullo, MUFASA: EL REY LEÓN, cuenta con Rafiki como el encargado de transmitir la leyenda de Mufasa a la joven cachorra de león Kiara, hija de Simba y Nala, con Timón y Pumba aportando sus característicos trucos. Narrada con flashbacks, la historia presenta a Mufasa como un cachorro huérfano, perdido y solo hasta que conoce a un simpático león llamado Taka, heredero de un linaje real. Este encuentro fortuito pone en marcha el largo viaje de un extraordinario grupo de excluidos en busca de su destino. Sus lazos se pondrán a prueba mientras trabajan juntos para eludir a un enemigo amenazante y mortal.",
    "reviews":  "\n" +
      "La mano hábil de Barry Jenkins y la música de Lin-Manuel Miranda contribuyen de alguna manera a cuadrar el círculo de la vida en Mufasa, pero esta historia irregularmente conmovedora no sirve por su estilo de animación impersonal y fotorrealista.",
    "duration":  "198",
    "image":  "https://lumiere-a.akamaihd.net/v1/images/wonderwall_instagram_teaser_poster_las_f9b6b48a.jpeg" ,
    "trailer":  "https://www.youtube.com/embed/jYGUYAaqmlU?si=FTVYnLF4l7Pu2GKA"
  }
]

let movieRental = [
  {
    "id": 1,
    "name": "Daniel David Perez Coapango",
    "email": "daniel@dano.com",
    "phone": "51351353",
    "direction": "Av. Mexico, CDMX, 0351",
    "days": 12,
    "confirmForm": true
  },
  {
    "id": 2,
    "name": "Maria Gonzalez Lopez",
    "email": "maria@correo.com",
    "phone": "5551234567",
    "direction": "Calle Juarez, Guadalajara, JAL, 44100",
    "days": 8,
    "confirmForm": true
  },
  {
    "id": 3,
    "name": "Juan Carlos Rodriguez",
    "email": "juancarlos@correo.com",
    "phone": "1234567890",
    "direction": "Calle Reforma, Monterrey, NL, 64000",
    "days": 15,
    "confirmForm": true
  },
  {
    "id": 4,
    "name": "Ana Sofía Hernandez",
    "email": "anasofia@correo.com",
    "phone": "9876543210",
    "direction": "Calle Palmas, Cancun, QR, 77500",
    "days": 5,
    "confirmForm": true
  },
  {
    "id": 5,
    "name": "Luis Miguel Rivera",
    "email": "luismiguel@correo.com",
    "phone": "5678901234",
    "direction": "Av. Revolucion, Puebla, PUE, 72000",
    "days": 10,
    "confirmForm": true
  }
];


let movieSale = [
  {
    "id": 1,
    "name": "Daniel David Perez Coapango",
    "email": "daniel@dano.com",
    "phone": "51351353",
    "direction": "Av. Mexico, CDMX, 0351",
    "days": 'N/A',
    "confirmForm": true
  },
  {
    "id": 2,
    "name": "Maria Gonzalez Lopez",
    "email": "maria@correo.com",
    "phone": "5551234567",
    "direction": "Calle Juarez, Guadalajara, JAL, 44100",
    "days": 'N/A',
    "confirmForm": true
  },
  {
    "id": 3,
    "name": "Andre Carlos Rodriguez",
    "email": "Anderlos@correo.com",
    "phone": "1234567890",
    "direction": "Calle Reforma, Monterrey, NL, 64000",
    "days": 'N/A',
    "confirmForm": true
  },
  {
    "id": 4,
    "name": "Karla Sofía Hernandez",
    "email": "karsofia@correo.com",
    "phone": "9876543210",
    "direction": "Calle Palmas, Cancun, QR, 77500",
    "days": 'N/A',
    "confirmForm": true
  },
  {
    "id": 5,
    "name": "Luis Herrera Rivera",
    "email": "luismiguel@correo.com",
    "phone": "5678901234",
    "direction": "Av. Revolucion, Puebla, PUE, 72000",
    "days": 'N/A',
    "confirmForm": true
  }
];


export const getMovies = () => {
  return movies;
};

export const getMovieRentals = () => {
  return movieRental;
};

export const getMovieSales = () => {
  return movieSale;
};
