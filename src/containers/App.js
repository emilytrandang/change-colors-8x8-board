import React from "react";
import "./App.module.css";
import Board from "../components/Board/Board";
import Header from "../components/Header/Header";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
