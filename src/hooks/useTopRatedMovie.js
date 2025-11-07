import { useQuery } from "@tanstack/react-query";
import React from "react";
import { api } from "../utils/api";
const fetchTopRated = async () => {
  return await api.get("movie/top_rated");
};

export const useTopRatedMovie = () => {
  return useQuery({
    queryKey: ["topRated"],
    queryFn: fetchTopRated,
    select: (result) => result.data,
  });
};
