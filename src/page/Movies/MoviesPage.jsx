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
  const [searchParams, setSearchParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  const { page, setPageByParams } = usePageStore();
  const keyword = searchParams.get("q");
  const { isLoading, data, isError, error } = useSearchMovie({ keyword, page });
  const sortRule = ["인기순", "최신순"];
  const { data: genreData } = useMovieGenres();
  const genreList = genreData?.map((genreInfo) => genreInfo.name);
  const handlePageClick = ({ selected }) => {
    // setPage(selected + 1);
    setPageByParams(selected + 1);
  };
  if (isLoading) return <div>search data loading</div>;
  if (isError) return <div>에러메세지 : {error.message}</div>;
  if (data.results.length === 0)
    return <Alert variant="danger">{keyword}와 관련된 영화는 없습니다!</Alert>;
  return (
    <Container className="movies-page-container">
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
