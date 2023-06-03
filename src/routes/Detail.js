import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  }
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies)

  return (
    <div>
      <img className={styles.bg} src={movies.background_image_original} alt={movies.title} />
      <div className={styles.movie}>
        <img className={styles.movie__img} src={movies.medium_cover_image} alt={movies.title} />
        <div>
          <h2 className={styles.movie__title}>{movies.title}</h2>
          <h3 className={styles.movie__year}>{movies.year}</h3>
          <span className={styles.movie__runtime}>{movies.runtime} min</span>
          <span className={styles.movie__rating}>⭐{movies.rating}</span>
          {/* <div className={styles.movie__genres}>
            {movies.genres.map((g) => (
              <span key={g}>{g}</span>
            ))}
          </div> */}
          <p className={styles.movie__des}>{movies.description_full}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;