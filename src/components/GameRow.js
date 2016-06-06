import React, { Component } from "react";
import autobind from "autobind-decorator";

import GameCell from "./GameCell"

@autobind
class GameRow extends Component {
  renderCell(cell, index) {
    const y = this.props.row.index

    return (
      <GameCell
        key={index}
        cell={{ cell: cell, position: { x: index, y: y }}}
        updateCell={this.props.updateCell}
      />
    );
  }

  render() {
    const { row } = this.props;

    return (
      <span>
        <br/>
        {row.row.map(this.renderCell)}
      </span>
    );
  }
}

export default GameRow
