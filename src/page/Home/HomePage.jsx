// 배너
// 인기 영화
// 평점 높은 영화

// movies 페이지 가는 법 2가지
// 1번 : 네비바에서 movies 버튼 클릭 -> popular 보여주기
// 2번 : 검색창을 통해 이동하기 -> 검색 관련 영화 보여주기

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
