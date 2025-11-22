import axiosInstance from "./Axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 


// TMDB requests
const requests = {
  // Trending Movies
  getTrending: () =>
    axiosInstance.get(`/trending/movie/day?api_key=${API_KEY}`),

  // Popular Movies
  getPopular: () => axiosInstance.get(`/movie/popular?api_key=${API_KEY}`),

  // Top-Rated Movies
  getTopRated: () => axiosInstance.get(`/movie/top_rated?api_key=${API_KEY}`),

  // Upcoming Movies
  getUpcoming: () => axiosInstance.get(`/movie/upcoming?api_key=${API_KEY}`),

  // Get movie details by ID
  getMovieDetails: (id) => axiosInstance.get(`/movie/${id}?api_key=${API_KEY}`),

  // Get movie videos (trailers)
  getMovieVideos: (id) =>
    axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}`),

  // Search movies
  searchMovies: (query) =>
    axiosInstance.get(`/search/movie?api_key=${API_KEY}&query=${query}`),

  // Genres
  getGenres: () => axiosInstance.get(`/genre/movie/list?api_key=${API_KEY}`),
};

export default requests;
