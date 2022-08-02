import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export function withRouter(Component) {
  return (props) => (
    <Component {...props} params={useParams()} navigate={useNavigate()} />
  );
}
