import React from "react";

const GenreFilter = ({
  genres,
  valueProperty,
  textProperty,
  onGenreFilter,
  selectedGenre,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          onClick={() => onGenreFilter(genre)}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "clickable list-group-item active"
              : "clickable list-group-item"
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
