import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";
import "./Banner.style.css";
const Banner = () => {
  const { isLoading, data, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${data.results[0].backdrop_path})`,
      }}
      className="banner-area"
    >
      <div className="banner-text">
        <h1 className="text-white">{data.results[0].title}</h1>
        <p className="text-white">{data.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;
