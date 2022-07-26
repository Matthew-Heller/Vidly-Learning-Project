import React from "react";

const Like = (props) => {
  let classes = "fa m-2 fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    />
  );
};

export default Like;
