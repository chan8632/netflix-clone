import { useQuery } from "@tanstack/react-query";
import { api } from "./../utils/api";
const fetchMovieDetail = async ({ movieId }) => {
  return await api.get(`movie/${movieId}`);
};

export const useMovieDetail = ({ movieId }) =>
  useQuery({
    queryKey: ["movieDetail", { movieId }],
    queryFn: () => fetchMovieDetail({ movieId }),
    select: (result) => result.data,
    suspense: true,
  });
