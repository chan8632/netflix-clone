import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchUseReview = ({ movieId }) => {
  return api.get(`movie/${movieId}/reviews`);
};

export const useReview = ({ movieId }) =>
  useQuery({
    queryKey: ["reviews", { movieId }],
    queryFn: () => fetchUseReview({ movieId }),
    select: (result) => result.data,
    suspense: true,
  });
