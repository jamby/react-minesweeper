var classNames = require('classnames');
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import StatusTypes from '../constants/statusTypes';

@autobind
class GameCell extends Component {
  onClick(e) {
    e.preventDefault();
    let { cell, position } = this.props.cell;

    if (e.type == 'contextmenu') { // Right click
      if (cell.status === null) {
        this.props.updateCell(position.x, position.y, StatusTypes.FLAGGED);
      } else if (cell.status === StatusTypes.FLAGGED) {
        this.props.updateCell(position.x, position.y, null);
      }
    } else { // Left click
      if (cell.status !== null) return;

      if (cell.isMine) {
        this.props.updateCell(position.x, position.y, StatusTypes.BOMBED);
      } else if (cell.status === null) {
        this.props.updateCell(position.x, position.y, StatusTypes.OPENED);
      }
    }
  }

  render() {
    const { cell } = this.props.cell;
    const { bombCount, status } = cell;

    let classes = classNames({
      'ms-cell': status === null || status === StatusTypes.FLAGGED,
      'ms-cell-opened': status === StatusTypes.OPENED || status === StatusTypes.BOMBED,
      'ms-flag': status === StatusTypes.FLAGGED
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
