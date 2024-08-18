import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      <div>
        Genres:
        {movie.genres.map((genre, index) => (
          <span key={index}> {genre} </span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
