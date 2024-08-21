// src/pages/Home.js
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies') 
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default Home;
