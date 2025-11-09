import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPopularMovies = async () => {
  return await axios.get("/.netlify/functions/getPopularMovies");
};
export const usePopularMoviesQuery = () =>
  useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
