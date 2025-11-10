import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchGenreList = async () => {
  return await api.get("genre/movie/list");
};

export const useGenresList = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenreList,
    select: (result) => result.data,
    staleTime: 1000 * 60 * 5,
  });
