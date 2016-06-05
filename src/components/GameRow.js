import React, { Component } from "react";
import autobind from "autobind-decorator";

import GameCell from "./GameCell"

@autobind
class GameRow extends Component {
  renderCell(cell, index) {
    return (
      <GameCell
        key={index}
        cell={cell}
        updateGameBoard={this.props.updateGameBoard}
      />
    );
  }

  render() {
    const { row } = this.props;
    return (
      <span>
        <br/>
        {row.map(this.renderCell)}
      </span>
    );
  }
}

export default GameRow
