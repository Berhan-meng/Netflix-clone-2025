import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/Requests";

export default function RowList() {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={requests.getOriginals}
        isLargeRow="true"
      />
      <Row title="Trending Movies" fetchUrl={requests.getTrending} />
      <Row title="Top Rated Movies" fetchUrl={requests.getTopRated} />
      <Row title="Action Movies" fetchUrl={requests.getActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.getHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.getRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.getDocumentaries} />
      <Row title="Popular TV Shows" fetchUrl={requests.getPopularTV} />
      <Row title="Upcoming Movies" fetchUrl={requests.getUpcoming} />
    </>
  );
}
