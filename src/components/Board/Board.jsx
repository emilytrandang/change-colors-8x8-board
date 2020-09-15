import React, { useState } from "react";
import Square from "../Square/Square";
import classes from "./Board.module.css";

//set initial color for every second squares (pink green pink green...)
const getInitialState = () => {
  const squaresColors = [];
  for (let r = 1; r < 9; r++) {
    for (let c = 1; c < 9; c++) {
      const squareColor =
        (r + c) % 2 === 0 ? classes.pinkSquare : classes.greenSquare;
      squaresColors.push(squareColor);
    }
  }
  return squaresColors;
};

const Board = () => {
  //set initial state as an array containing squares colors
  const [squaresColors, setSquaresColors] = useState(getInitialState());

  const clickSquareHandler = (index) => {
    const newSquaresColors = [...squaresColors];
    const newColor =
      newSquaresColors[index] === classes.pinkSquare
        ? classes.greenSquare
        : classes.pinkSquare;
    newSquaresColors[index] = newColor;
    setSquaresColors(newSquaresColors);
  };

  const resetHandler = () => {
    setSquaresColors(getInitialState());
  };
  return (
    <div className={classes.container}>
      <button
        className={classes.resetButton}
        type="Button"
        onClick={resetHandler}
      >
        Reset
      </button>
      <div className={classes.board}>
        {squaresColors.map((color, i) => (
          <Square
            index={i}
            key={i}
            squareColor={color}
            clickSquare={() => clickSquareHandler(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
