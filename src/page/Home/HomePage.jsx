// 배너
// 인기 영화
// 평점 높은 영화

import Banner from "./components/Banner/Banner";
import Slide from "./components/Slide/Slide";
import "react-multi-carousel/lib/styles.css";
// 최신 영화
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Slide />
    </div>
  );
};

export default HomePage;
