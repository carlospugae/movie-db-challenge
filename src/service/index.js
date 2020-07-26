const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

export default {
  getMovies: async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const data = await response.json();

    return data.results;
  },
  getMovieDetails: async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();

    return data;
  },
  searchMovie: async (movieName) => {
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`
    );
    const data = await response.json();

    return data.results;
  },
};
