import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieForm = () => {
  let params = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <h1 className="m-2">Movie Form {params.id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;