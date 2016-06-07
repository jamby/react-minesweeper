var classNames = require('classnames');
import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class GameCell extends Component {
  onClick(e) {
    let { cell, position } = this.props.cell;
    if (!cell.isOpened) cell.isOpened = !cell.isOpened;
    this.props.updateCell(position.x, position.y, cell);
  }

  render() {
    const { cell } = this.props.cell;
    const { isOpened, val } = cell;

    let classes = classNames({
      'cell': isOpened === false,
      'cell-opened': isOpened === true
    });

    return (
      <span className={classes} onClick={this.onClick}>
        {cell.isMine && 'B'}
        {cell.val != 0 && `${cell.val}`}
      </span>
    );
  }
}

export default GameCell
