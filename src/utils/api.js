import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { accept: "application/json", Authorization: `${API_KEY}` },
});
