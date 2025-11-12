import "./Banner.style.css";
const Banner = ({ movieData }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieData?.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="banner-text-area text-white">
        <h1>{movieData?.title}</h1>
        <p>{movieData?.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
