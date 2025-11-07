// 배너
// 인기 영화
// 평점 높은 영화

import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpComingMoviesSlide from "./components/UpComingMoviesSlide/UpComingMoviesSlide";
// 최신 영화
const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpComingMoviesSlide />
    </div>
  );
};

export default HomePage;
