import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "./../../hooks/useSearchMovie";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import MovieCard from "./../../common/MovieCard/MovieCard";
import "./MoviesPage.style.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import FilterButton from "./components/FilterButton";
import { useMovieGenres } from "../../hooks/useMovieGenres";

// 페이지네이션 설치
// 페이지 state 생성
// 페이지 클릭 시 버튼 변경
// 클릭된 버튼으로 query를 줘서 데이터 불러오기
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = searchParams.get("q");
  const { isLoading, data, isError, error } = useSearchMovie({ keyword, page });
  const sortRule = ["인기순", "최신순"];
  const { data: genreData } = useMovieGenres();
  const genreList = genreData?.map((genreInfo) => genreInfo.name);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  if (isLoading) return <div>search data loading</div>;
  if (isError) return <div>에러메세지 : {error.message}</div>;

  return (
    <Container>
      <Row xs="auto" className="filter-button">
        <Col>
          <FilterButton title="정렬기준" items={sortRule} />
        </Col>
        <Col>
          <FilterButton title="장르별 검색" items={genreList} />
        </Col>
      </Row>
      <Row>
        {data.results.map((movie, index) => (
          <Col key={index} className="card-list">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages}
        previousLabel="< previous"
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
