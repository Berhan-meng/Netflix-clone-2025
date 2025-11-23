import React, { useEffect, useState } from "react";
import requests from "../../utils/Requests";
import axiosInstance from "../../utils/Axios";
import "./banner.css";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await axiosInstance.get(requests.getTrending);
        const results = req.data.results;

        const randomMovie = results[Math.floor(Math.random() * results.length)];

        setMovie(randomMovie);
      } catch (err) {
        console.error("Error fetching trending:", err);
      }
    }

    fetchData();
  }, []);

  // Don't render until movie is loaded
  if (!movie) return null;

  const bannerImg = movie.backdrop_path || movie.poster_path;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${bannerImg}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}
