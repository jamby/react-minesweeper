var classNames = require('classnames');
import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class GameCell extends Component {
  onClick(e) {
    e.preventDefault();
    let { cell, position } = this.props.cell;
    let status = null;
    if (e.type == 'contextmenu') { // Right click
      status = 'FLAGGED';
    } else { // Left click
      if (cell.isMine) {
        status = 'BOMBED';
      } else if (status === null) {
        status = 'OPENED';
      }
    }
    this.props.updateCell(position.x, position.y, status);
  }

  render() {
    const { cell } = this.props.cell;
    const { bombCount, status } = cell;

    let classes = classNames({
      'ms-cell': status === null,
      'ms-cell-opened': status === 'OPENED',
      'ms-flag': status === 'FLAGGED'
    });
    let bombCountClass = cell.bombCount != 0 ? `ms-${cell.bombCount}` : '';

    return (
      <div className={`${classes} ${bombCountClass}`} onClick={this.onClick} onContextMenu={this.onClick}>
        {cell.isMine && 'B'}
        {cell.bombCount != 0 && `${cell.bombCount}`}
      </div>
    );
  }
}

export default GameCell
