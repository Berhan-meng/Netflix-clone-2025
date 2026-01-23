import { useEffect, useState } from "react";
import axiosInstance from "../../../utils/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import styles from "./Row.module.css";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const res = await axiosInstance.get(fetchUrl);
        setMovies(res.data.results);
      } catch (err) {
        console.error("Error:", err);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "300",
    width: "60%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      <div className={styles.row__posters}>
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`${styles.row__poster} ${isLargeRow && styles.row__posterLarge}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.name || movie?.title || movie?.original_name}
          />
        ))}
      </div>

      <div style={{ padding: "15px" }}>
        {trailerUrl && (
          <div className={styles.trailerContainer}>
            <button
              className={styles.closeBtn}
              onClick={() => setTrailerUrl("")}
            >
              ✖ Close
            </button>

            <YouTube videoId={trailerUrl} opts={opts} />
          </div>
        )}
      </div>
    </div>
  );
}
