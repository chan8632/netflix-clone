import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useMovieGenres } from "../../hooks/useMovieGenres";
import { usePageStore } from "../../stores/pageStore";
import MovieCard from "./../../common/MovieCard/MovieCard";
import { useSearchMovie } from "./../../hooks/useSearchMovie";
import FilterButton from "./components/FilterButton";
import "./MoviesPage.style.css";

// 페이지네이션 설치
// 페이지 state 생성
// 페이지 클릭 시 버튼 변경
// 클릭된 버튼으로 query를 줘서 데이터 불러오기
const MoviesPage = () => {
  // 검색 키워드 추출 및 불러오기
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPageByParams } = usePageStore();
  const keyword = searchParams.get("q");
  // 정렬 state
  const [sortRule, setSortRule] = useState(null);
  // 분류 state
  const [category, setCategory] = useState(null);

  // 정렬 함수
  const reviewsCountSort = (data) => {
    const popularSortList = [...data].sort(
      (a, b) => b.vote_count - a.vote_count
    );
    return popularSortList;
  };
  const upComingSort = (data) => {
    const sortList = [...data].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    return sortList;
  };

  // 영화 정보
  const { isLoading, data, isError, error } = useSearchMovie({ keyword, page });
  console.log("mm", data?.results);

  const sortRuleList = ["리뷰 많은 순", "최신순"];
  // 장르 가져오기

  const { data: genreData } = useMovieGenres();
  const genreList = genreData?.map((genreInfo) => genreInfo.name);
  // category(이름)을 id로 변경
  // id로 필터링해서 데이터 가공
  const matchGenreAndCategory = genreData?.find(
    (genreInfo) => genreInfo.name === category
  );
  // 데이터 가지고 와서 필터기준과 매칭
  const filterMovie = (data, matching) => {
    const matchingData = [...data].filter((movie) =>
      movie.genre_ids.includes(matching)
    );
    return matchingData;
  };
  // 장르 이름 리스트

  // 페이지네이션 숫자 버튼 클릭 시
  const handlePageClick = ({ selected }) => {
    setPageByParams(selected + 1);
  };

  if (isLoading) return <div>search data loading</div>;
  if (isError) return <div>에러메세지 : {error.message}</div>;
  if (data.results.length === 0)
    return <Alert variant="danger">{keyword}와 관련된 영화는 없습니다!</Alert>;

  //영화 소트 로직
  let displayData = data.results;
  if (sortRule === "리뷰 많은 순") {
    displayData = reviewsCountSort(displayData);
    console.log("rr", displayData);
  } else if (sortRule === "최신순") {
    displayData = upComingSort(displayData);
    console.log("ddd", displayData);
  }

  //영화 필터링 로직
  useEffect(() => {}, [category]);

  return (
    <Container className="movies-page-container">
      <Row xs="auto" className="filter-button">
        <Col>
          <FilterButton
            title="정렬기준"
            items={sortRuleList}
            dataHandling={setSortRule}
          />
        </Col>
        <Col>
          <FilterButton
            title="장르별 검색"
            items={genreList}
            dataHandling={setCategory}
          />
        </Col>
      </Row>
      <Row>
        {displayData.map((movie, index) => (
          <Col key={index} className="card-list">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
        className="pagination"
      />
    </Container>
  );
};

export default MoviesPage;
