import React, { Component } from 'react';
import autobind from 'autobind-decorator';

import GameRow from './GameRow';
import StatusTypes from '../constants/statusTypes';

@autobind
class GameBoard extends Component {
  updateCell(x, y, status) {
    let { gameBoard } = this.props;
    switch(status) {
      case StatusTypes.OPENED:
        gameBoard = this.clearAdjacentCells(gameBoard, { x: x, y: y });
        break;
      case StatusTypes.FLAGGED:
        if (this.props.minesRemaining > 0) {
          gameBoard[x][y].status = StatusTypes.FLAGGED;
          this.props.subtractMine();
        }
        break;
      case StatusTypes.BOMBED:
        gameBoard[x][y].status = StatusTypes.BOMBED;
        break;
      case null:
        if (gameBoard[x][y].status === StatusTypes.FLAGGED) this.props.addMine();
        gameBoard[x][y].status = null;
        break;
      default:
        console.log(`something else happened: [${x}][${y}], ${status}`);
    }

    this.props.updateGameBoard(gameBoard);
  }

  clearAdjacentCells(gameBoard, cell) {
    const { x, y } = cell;

    if ((x > -1 && y > -1) &&
        (x < gameBoard.length && y < _.first(gameBoard).length) &&
        gameBoard[x][y].status === null) {
      gameBoard[x][y].status = StatusTypes.OPENED;

      if (gameBoard[x][y].bombCount === 0) {
        for (let xx = -1; xx <= 1; xx++) {
          for (let yy = -1; yy <= 1; yy++) {
            gameBoard = this.clearAdjacentCells(gameBoard, { x: x + xx, y: y + yy});
          }
        }
      }
    }

    return gameBoard;
  }

  renderRow(row, index) {
    return (
      <GameRow
        key={index}
        row={{row: row, index: index}}
        updateCell={this.updateCell}
      />
    );
  }

  render() {
    const { gameBoard } = this.props;
    return (
      <div>
        {gameBoard.map(this.renderRow)}
      </div>
    );
  }
}

export default GameBoard
