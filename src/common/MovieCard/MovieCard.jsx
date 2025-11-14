import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import fiveStar from "../../assets/fivestar.png";
import fourStar from "../../assets/fourstar.png";
import imageError from "../../assets/imageError.png";
import oneStar from "../../assets/onestar.png";
import threeStar from "../../assets/threestar.png";
import twoStar from "../../assets/twostar.png";
import zeroStar from "../../assets/zerostar.png";
import { useMovieGenres } from "../../hooks/useMovieGenres";
import "./MovieCard.style.css";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const starParsing = {
    0: zeroStar,
    1: oneStar,
    2: twoStar,
    3: threeStar,
    4: fourStar,
    5: fiveStar,
  };
  const { data: genreData, isError, error } = useMovieGenres();
  const genreList = genreData?.reduce((obj, genresInfo) => {
    obj[genresInfo.id] = genresInfo.name;
    return obj;
  }, {});
  if (isError) return <div>장르 데이터 오류 : {error.message}</div>;
  const allIconUrl =
    "https://i.namu.wiki/i/oue1NCn0ejKPZgHqsUYAer_tvO-7Jarrq_6uqUT4Gkm9H3P0ADs9F-4-TU4R_RXPHXc06RcD9FrWlAlcQYH7fQ.svg";
  const adultIconUrl =
    "https://i.namu.wiki/i/DwP6Q0YwM0AoTG1sm3Su07d11Hxz5q6DF60JbjLz8JK4cGoWPXVUkwz3y7BRJb2cXSERuh32VjvPAyEKLsOwHA.svg";
  return (
    <div
      style={{
        backgroundImage: `url(${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w220_and_h330_face/${movie?.poster_path}`
            : imageError
        })`,
      }}
      className="movie-card"
      onClick={() => {
        navigate(`/movies/${movie?.id}`);
      }}
    >
      <div className="overlay">
        <h4>{movie?.title}</h4>
        <div className="badge-list">
          {movie?.genre_ids.map((id, index) => (
            <Badge key={index} bg="danger">
              {genreList[id]}
            </Badge>
          ))}
        </div>

        <img
          style={{ minWidth: "70px", height: "20px" }}
          src={`${starParsing[Math.floor(movie?.vote_average / 2)]}`}
        />

        <div>review counts : {movie?.vote_count}people</div>
        <div>
          {movie?.adult ? (
            <img src={adultIconUrl} style={{ width: "20px", height: "20px" }} />
          ) : (
            <img src={allIconUrl} style={{ width: "20px", height: "20px" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
