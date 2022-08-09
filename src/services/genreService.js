import http from "./http";
import { apiUrl } from "../config.json";

export function getGenres() {
  return http.get(`${apiUrl}/genres.json`);
}
