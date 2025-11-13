import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchTrailer = ({ movieId }) => {
  return api.get(`movie/${movieId}/videos`);
};
export const useTrailerId = ({ movieId }) =>
  useQuery({
    queryKey: ["trailer", { movieId }],
    queryFn: () => fetchTrailer({ movieId }),
    select: (result) => result.data,
  });
