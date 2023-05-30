import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  let { id } = useParams();
  const [movie, setMovies] = useState([]);
  let navigate = useNavigate();
  let url = "http://127.0.0.1:8000/movies/";
  let concatenatedUrl = `${url}${id}`;

  useEffect(() => {
    axios.get(concatenatedUrl).then((response) => {
      setMovies(response.data);
    });
  }, [concatenatedUrl]);

  return (
    <div className="movie-details">
      <h2>Movie Information</h2>
      <div>
        <ul>
          <li>
            <strong>Movie Title:</strong> {movie.title}
          </li>
          <li>
            <strong>Year:</strong> {movie.year}
          </li>
          <li>
            <strong>Running Time:</strong> {movie.time}
          </li>
          <li>
            <strong>Directed By:</strong>{" "}
            {movie.directors && movie.directors.length > 0
              ? movie.directors[0].dir_fname + " " + movie.directors[0].dir_lname
              : "N/A"}
          </li>
          <li>
            <strong>Starring By:</strong>{" "}
            {movie.cast && movie.cast.length > 0
              ? `${movie.cast[0].role} - ${movie.cast[0].actor.act_fname} ${movie.cast[0].actor.act_lname}`
              : "N/A"}
          </li>
          <li>
            <strong>Genre:</strong>{" "}
            {movie.genres && movie.genres.length > 0
              ? movie.genres[0].gen_title
              : "N/A"}
          </li>
          <li>
            <strong>Rating:</strong>{" "}
            {movie.ratings && movie.ratings.length > 0
              ? movie.ratings[0].reviewer.rev_name
              : "N/A"}
          </li>
          <li>
            <strong>Score:</strong>{" "}
            {movie.ratings && movie.ratings.length > 0
              ? `${movie.ratings[0].rev_stars} stars`
              : "N/A"}
          </li>
        </ul>
      </div>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}
