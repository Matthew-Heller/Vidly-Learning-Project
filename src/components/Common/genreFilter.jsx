import React from "react";

const GenreFilter = (props) => {
  const {
    genres,
    valueProperty,
    textProperty,
    onGenreFilter,
    selectedGenre,
  } = props;

  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          onClick={() => onGenreFilter(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

GenreFilter.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default GenreFilter;
