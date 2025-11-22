import React, { useEffect, useState } from "react";
import requests from "../../utils/Requests";
import "./banner.css";

export default function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await requests.getTrending();
        const results = req.data.results;
        setMovie(results[Math.floor(Math.random() * results.length)]);
      } catch (err) {
        console.error("Error fetching trending:", err);
      }
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <di v className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </di>

        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  );
}
