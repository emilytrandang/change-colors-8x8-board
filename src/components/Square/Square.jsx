import React from "react";
import classes from "./Square.module.css";

const Square = (props) => {
  return (
    <div
      className={`${classes.square} ${props.squareColor}`}
      onClick={props.clickSquare}
    ></div>
  );
};

export default Square;
