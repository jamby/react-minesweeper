import React, { Component } from "react";
import autobind from "autobind-decorator";

import GameRow from "./GameRow"

@autobind
class GameBoard extends Component {
  renderRow(row, index) {
    return (
      <GameRow
        key={index}
        row={row}
        updateGameBoard={this.props.updateGameBoard}
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
