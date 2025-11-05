import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchMovieData = async() => {
  return await api.get("movie/popular");
};
export const usePostMovie = () =>
  useQuery({
    queryKey: ["popularMovies"],
      queryFn: fetchMovieData,
      select: (result) => result.data,
  });
