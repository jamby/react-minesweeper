import React, { Component } from "react";
import ReactDOM from "react-dom";
import autobind from "autobind-decorator";

require('bootstrap');
require("./app.scss");
import DifficultyForm from "./components/DifficultyForm"
import GameBoard from "./components/GameBoard"

@autobind
class App extends Component {
  constructor() {
    super();
    this.state = { gameBoard: [] };
  }

  updateGameBoard(gameBoard) {
    this.setState({ gameBoard: gameBoard });
  }

  render() {
    return(
      <div>
        <h1>Minesweeper</h1>
        <DifficultyForm
          updateGameBoard={this.updateGameBoard}
        />
        <GameBoard
          gameBoard={this.state.gameBoard}
          updateGameBoard={this.updateGameBoard}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('app'));
