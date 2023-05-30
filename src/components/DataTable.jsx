import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function DataTable({ data }) {
  let navigate = useNavigate();

  return (
    <>
      <h1 className="MyMovieList">MyMovieList</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Movie ID</th>
            <th>Movie Title</th>
            <th>Year Made</th>
            <th>Length</th>
            <th>Language</th>
            <th>Date of Release</th>
            <th>Country Released</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData.mov_id}>
              <td>{rowData.mov_id}</td>
              <td>{rowData.mov_title}</td>
              <td>{rowData.mov_year}</td>
              <td>{rowData.mov_time}</td>
              <td>{rowData.mov_lang}</td>
              <td>{rowData.mov_dt_rel}</td>
              <td>{rowData.mov_rel_country}</td>
              <td>
                <button onClick={() => navigate(`/movieDetails/${rowData.mov_id}`)}>
                  More Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};