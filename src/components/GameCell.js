var classNames = require('classnames');
import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class GameCell extends Component {
  onClick(e) {
    e.preventDefault();
    let { cell, position } = this.props.cell;
    if (e.type == 'contextmenu') { // Right click
      
    } else { // Left click
      if (!cell.isOpened) cell.isOpened = !cell.isOpened;
    }
    this.props.updateCell(position.x, position.y, cell);
  }

  render() {
    const { cell } = this.props.cell;
    const { isOpened, val } = cell;

    let classes = classNames({
      'ms-cell': isOpened === false,
      'ms-cell-opened': isOpened === true
    });
    let valClass = cell.val != 0 ? `ms-${cell.val}` : '';

    return (
      <div className={`${classes} ${valClass}`} onClick={this.onClick} onContextMenu={this.onClick}>
        {cell.isMine && 'B'}
        {cell.val != 0 && `${cell.val}`}
      </div>
    );
  }
}

export default GameCell
