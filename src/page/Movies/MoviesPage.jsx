import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "./../../hooks/useSearchMovie";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./../../common/MovieCard/MovieCard";
import "./MoviesPage.style.css";
import ReactPaginate from "react-paginate";
import { useState } from "react";
// 페이지네이션 설치
// 페이지 state 생성
// 페이지 클릭 시 버튼 변경
// 클릭된 버튼으로 query를 줘서 데이터 불러오기
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = searchParams.get("q");
  const { isLoading, data, isError, error } = useSearchMovie({ keyword, page });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  if (isLoading) return <div>search data loading</div>;
  if (isError) return <div>에러메세지 : {error.message}</div>;

  return (
    <Container>
      <Row>
        <Col xs={12} md={4} className="card-list">
          필터
        </Col>
        <Col xs={12} md={8}>
          <Row>
            {data.results.map((movie, index) => (
              <Col key={index} className="card-list">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
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
      />
    </Container>
  );
};

export default MoviesPage;
