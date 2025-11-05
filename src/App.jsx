import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./page/Home/HomePage";
import MoviesPage from "./page/Movies/MoviesPage";
import MovieDetailPage from "./page/MovieDetail/MovieDetailPage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";

function App() {
  // 홈페이지  (/)
  // 전체영화 목록 (서치) (/movies)
  // 영화 상세페이지 (/movies/:id)

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
