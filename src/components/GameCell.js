var classNames = require('classnames');
import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class GameCell extends Component {
  onClick(e) {
    e.preventDefault();
    let { cell, position } = this.props.cell;
    let info = null;
    if (e.type == 'contextmenu') { // Right click
      info = 'FLAGGED';
    } else { // Left click
      if (!cell.isOpened && cell.isFlagged === false) info = 'OPENED';
    }
    this.props.updateCell(position.x, position.y, info);
  }

  render() {
    const { cell } = this.props.cell;
    const { bombCount, isOpened, isFlagged } = cell;

    let classes = classNames({
      'ms-cell': isOpened === false,
      'ms-cell-opened': isOpened === true,
      'ms-flag': isFlagged === true
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
