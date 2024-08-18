import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"; 
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
        <NavBar />
      </header>
      <main>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </main>
    </>
  );
}

export default Home;
