import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Movies from "./Pages/movies";
import NavBar from "./components/navBar";
import Customers from "./Pages/customers";
import Rentals from "./Pages/rentals";
import NotFound from "./Pages/notFound";
import MovieForm from "./Pages/movieForm";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="movies/:id" element={<MovieForm />} />
            <Route path="movies" element={<Movies />}></Route>
            <Route path="customers" element={<Customers />} />
            <Route path="rentals" element={<Rentals />} />
            <Route path="/" exact element={<Navigate to="movies" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
