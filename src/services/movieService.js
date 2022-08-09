import * as genresAPI from "./genreService";
import http from "./http";
import { apiUrl } from "..//config.json";

export function getMovies() {
  return http.get(`${apiUrl}/movies.json`);
}

export function getMovie(id) {
  return http.get(`${apiUrl}/movies/${id}.json`);
}

export function saveMovie(movie) {
  // let movieInDb = movies.find((m) => m._id === movie._id) || {};
  // movieInDb.title = movie.title;
  // movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  // movieInDb.numberInStock = movie.numberInStock;
  // movieInDb.dailyRentalRate = movie.dailyRentalRate;
  // if (!movieInDb._id) {
  //   movieInDb._id = Date.now().toString();
  //   movies.push(movieInDb);
  // }
  // return movieInDb;
}

export function deleteMovie(id) {
  return http.delete(`${apiUrl}/movies/${id}.json`);
}
