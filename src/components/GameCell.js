var classNames = require('classnames');
import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class GameCell extends Component {
  onClick(e) {
    console.log(this.props.cell);
  }

  render() {
    const { cell } = this.props;
    const { isOpened, val } = cell;

    let classes = classNames({
      'cell': isOpened === false,
      'cell-opened': isOpened === true
    });

    return (
      <span className={classes} onClick={this.onClick}>
        {cell.isMine}
      </span>
    );
  }
}

export default GameCell
