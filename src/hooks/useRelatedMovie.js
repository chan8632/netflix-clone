import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import { Suspense } from "react";

const fetchRelatedMovie = ({ movieId }) => {
  return api.get(`movie/${movieId}/recommendations`);
};

export const useRelatedMovie = ({ movieId }) =>
  useQuery({
    queryKey: ["relatedMovie", { movieId }],
    queryFn: () => fetchRelatedMovie({ movieId }),
    select: (result) => result.data,
    suspense: true,
  });
