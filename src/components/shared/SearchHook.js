import { useState, useEffect } from "react";
import { getMovies } from "../../api/dbUtils";

const SearchHook = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchedMovies = getMovies();
    setMovies(fetchedMovies);
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return {
    searchQuery,
    filteredMovies,
    handleSearchChange,
  };
};

export default SearchHook;
