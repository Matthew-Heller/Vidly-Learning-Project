import React from "react";
import Joi from "joi-browser";
import Form from "../components/Common/form";
import { getGenres } from "../services/genreService";
import { getMovie } from "../services/movieService";
import { withRouter } from "../utils/hocs";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  async componentDidMount() {
    const { data: genreSpread } = await getGenres();
    const genres = Object.values(genreSpread);
    this.setState({ genres });

    const movieId = this.props.params.id;
    if (movieId === "new") return;

    const { data: movie } = await getMovie(movieId);
    if (!movie) return this.props.navigate("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    // saveMovie(this.state.data);
    this.props.navigate("/movies");
  };

  render() {
    return (
      <div>
        <h1 className="m-2">Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default withRouter(MovieForm);
