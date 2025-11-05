// 배너
// 인기 영화
// 평점 높은 영화

import { usePostMovie } from "../../hooks/usePostMovie";
import Banner from "./components/Banner/Banner";

// 최신 영화
const HomePage = () => {
  const { data } = usePostMovie();
  console.log(data);
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;
