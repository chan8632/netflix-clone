import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import { Suspense } from "react";

const fetchGenreList = async () => {
  return await api.get("genre/movie/list");
};

export const useMovieGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenreList,
    select: (result) => result.data.genres,
    staleTime: 1000 * 60 * 5,
    suspense: true,
  });
