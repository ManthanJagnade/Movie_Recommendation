import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <div key={movie.id} className="MovieList-item">
          <img src={movie.poster} alt={movie.title} className="MovieList-poster" />
          <h3 className="MovieList-title">{movie.title}</h3>
          <p className="MovieList-description">{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
