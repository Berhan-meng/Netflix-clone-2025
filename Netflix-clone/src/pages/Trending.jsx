import { useEffect, useState } from "react";
import requests from "../utils/Requests";

export default function Trending() {
  const [movies, setMovies] = useState([]);

useEffect(() => {
  (async () => {
    try {
      const res = await requests.getTrending();
      setMovies(res.data.results);
    } catch (err) {
      console.error("Error:", err);
    }
  })();
}, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {movies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}
