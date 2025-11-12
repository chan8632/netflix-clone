import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import Banner from "./components/Banner/Banner";
const MovieDetailPage = () => {
  const { id } = useParams();
  const { isLoading, data, isError, error } = useMovieDetail({ movieId: id });
  console.log("ddd", data);
  return (
    <div>
      <Banner movieData={data} />
    </div>
  );
};

export default MovieDetailPage;
