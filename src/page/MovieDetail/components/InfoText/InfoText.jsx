import React from "react";
import { Badge, Button } from "react-bootstrap";
import "./InfoText.style.css";
import RelatedMovies from "../RelatedMovies/RelatedMovies";
const InfoText = ({ movieData }) => {
  const allIconUrl =
    "https://i.namu.wiki/i/oue1NCn0ejKPZgHqsUYAer_tvO-7Jarrq_6uqUT4Gkm9H3P0ADs9F-4-TU4R_RXPHXc06RcD9FrWlAlcQYH7fQ.svg";
  const adultIconUrl =
    "https://i.namu.wiki/i/DwP6Q0YwM0AoTG1sm3Su07d11Hxz5q6DF60JbjLz8JK4cGoWPXVUkwz3y7BRJb2cXSERuh32VjvPAyEKLsOwHA.svg";
  const imdbUrl =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46a288fa-fbb4-497b-8dbd-666e807dfdb3/dgj7tcl-61a18a1d-7f56-4f98-958a-7d013aaae390.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi80NmEyODhmYS1mYmI0LTQ5N2ItOGRiZC02NjZlODA3ZGZkYjMvZGdqN3RjbC02MWExOGExZC03ZjU2LTRmOTgtOTU4YS03ZDAxM2FhYWUzOTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7UOyqMFYbwLcUzj1DgowgPizMD8XL76CNQH2VQ_r6hw";
  const peopleIcon = "https://noona-netflix-react-query.vercel.app/people4.png";
  return (
    <div className="m-10">
      <div className="d-flex gap-3 flex-column">
        <div className="d-flex gap-3">
          {movieData?.genres.map((genre, index) => (
            <Badge bg="danger" key={index}>
              {genre.name}
            </Badge>
          ))}
        </div>
        <h1>{movieData?.title}</h1>
        <div className="d-flex gap-3">
          <span className="d-flex gap-2">
            <img src={imdbUrl} style={{ width: "20px", height: "20px" }} />
            {movieData?.vote_average}
          </span>
          <span className="d-flex gap-2">
            <img src={peopleIcon} style={{ width: "20px", height: "20px" }} />
            {movieData?.popularity}
          </span>
          <span className="d-flex gap-2">
            {movieData?.adult ? (
              <img
                src={adultIconUrl}
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <img src={allIconUrl} style={{ width: "20px", height: "20px" }} />
            )}
          </span>
        </div>
        {/* 영화내용 */}
        <hr className="border-bottom border-white opacity-100" />
        <p>{movieData?.overview}</p>
        <hr className="border-bottom border-white opacity-100" />
        {/* 상세정보들 */}
        <div className="d-flex gap-2">
          <Badge bg="danger">Budget</Badge>$
          {movieData?.budget.toLocaleString("ko-kr")}
        </div>
        <div className="d-flex gap-2">
          <Badge bg="danger">Revenue</Badge>$
          {movieData?.revenue.toLocaleString("ko-kr")}
        </div>
        <div className="d-flex gap-2">
          <Badge bg="danger">release_date</Badge>
          {movieData?.release_date}
        </div>
        <div className="d-flex gap-2">
          <Badge bg="danger">runtime</Badge>
          {movieData?.runtime}m
        </div>
      </div>
    </div>
  );
};

export default InfoText;
