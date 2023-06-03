import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Movie.module.css"

function Movie({ id, coverImg, title, year, genres, rating }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div className={styles.movie}>
          <img className={styles.movie__img} src={coverImg} alt={title} />
          <span className={styles.hover}>
            <p className={styles.movie__rating}>⭐<br />{rating} / 10</p>
            <ul className={styles.movie__genres}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </span>
        </div>
      </Link>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;