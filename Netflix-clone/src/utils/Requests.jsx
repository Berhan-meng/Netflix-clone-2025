// import axiosInstance from "./Axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// TMDB requests
const requests = {
  // Trending Movies
  getTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  //Original Movies
  getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // Top-Rated Movies
  getTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // // Action Movies
  getActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // //Comedy Movies
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // // Horror Movies
  getHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // // Romance Movies
  getRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // //Documenteries
  getDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // //Popular  tv Shows
  getPopularTV:`/tv/popular?api_key=${API_KEY}`,
  // // Popular Movies
  getPopular:`/movie/popular?api_key=${API_KEY}&language=en-US`,
  // Upcoming Movies
  getUpcoming: `/movie/upcoming?api_key=${API_KEY}`
};

export default requests;
