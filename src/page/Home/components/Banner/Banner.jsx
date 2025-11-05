import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovie";

const Banner = () => {
   const { data } = usePopularMoviesQuery();
   console.log(data);
  return <div>banner</div>;
};

export default Banner;
