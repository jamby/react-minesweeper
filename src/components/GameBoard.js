import React, { Component } from "react";
import autobind from "autobind-decorator";

import GameRow from "./GameRow"

@autobind
class GameBoard extends Component {
  updateCell(x, y, info) {
    let { gameBoard } = this.props;
    gameBoard[y][x] = info;
    this.props.updateGameBoard(gameBoard);
  }

  renderRow(row, index) {
    return (
      <GameRow
        key={index}
        row={{row: row, index: index}}
        updateCell={this.updateCell}
      />
    );
  }

  render() {
    const { gameBoard } = this.props;
    return (
      <span>
        {gameBoard.map(this.renderRow)}
      </span>
    );
  }
}

export default GameBoard
