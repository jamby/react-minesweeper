import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import GameCell from './GameCell';

@autobind
class GameRow extends Component {
  renderCell(cell, index) {
    const x = this.props.row.index

    return (
      <GameCell
        key={index}
        cell={{ cell: cell, position: { x: x, y: index }}}
        updateCell={this.props.updateCell}
      />
    );
  }

  render() {
    const { row } = this.props.row;

    return (
      <div className="ms-row">
        {row.map(this.renderCell)}
      </div>
    );
  }
}

export default GameRow
