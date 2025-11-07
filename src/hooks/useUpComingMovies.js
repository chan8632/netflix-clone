import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchUpComingMovie = () => {
  return api.get("movie/upcoming");
};

export const useUpComingMoviesQuery = () =>
  useQuery({
    queryKey: ["upcoming"],
    queryFn: fetchUpComingMovie,
    select: (result) => result.data,
  });
