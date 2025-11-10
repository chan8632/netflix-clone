import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchSearchMovie = (keyword) => {
  return keyword === null
    ? api.get("movie/popular")
    : api.get(`search/movie?query=${keyword}`);
};

export const useSearchMovie = (keyword) => {
  return useQuery({
    queryKey: ["search-data", keyword],
    queryFn: () => fetchSearchMovie(keyword),
    select: (result) => result.data,
  });
};
