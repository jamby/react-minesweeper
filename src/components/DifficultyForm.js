import React, { Component } from "react";
import autobind from "autobind-decorator";

@autobind
class DifficultyForm extends Component {
  static diffValues = [
    { value: "Beginner", width: 9, height: 9, mines: 10 },
    { value: "Intermediate", width: 16, height: 16, mines: 40 },
    { value: "Expert", width: 16, height: 30, mines: 99 },
  ]

  componentWillMount() {
    this.setBoard(0);
  }

  createBoard(width, height) {
    return _.range(height).map(() => {
      return _.range(width).map(() => {
        return { val: 0, isOpened: false, isMine: false };
      });
    });
  }

  setMines(gameBoard, width, height, mines) {
    _.times(mines, (mine) => {
      let isMine = false;
      while (isMine === false) {
        let x = parseInt(Math.random(height) * height);
        let y = parseInt(Math.random(width) * width);
        if (gameBoard[x][y].isMine === false) {
          isMine = gameBoard[x][y].isMine = true;
        }
      }
    });
    return gameBoard;
  }

  setBoard(value) {
    const { width, height, mines } = DifficultyForm.diffValues[value];
    let gameBoard = this.createBoard(width, height);
    gameBoard = this.setMines(gameBoard, width, height, mines);
    this.props.updateGameBoard(gameBoard);
  }

  setDifficulty(e) {
    this.setBoard(e.target.value);
  }

  renderDifficulty(index) {
    const { value, width, height, mines } = DifficultyForm.diffValues[index];

    return (
      <option key={value} value={index}>
        {value} - {width}x{height} - {mines} Mines
      </option>
    );
  }

  render() {
    const diffValues = DifficultyForm.diffValues;
    return (
      <form>
        <div className="form-group">
          <label className="difficulty">Difficulty</label>
          <select className="form-control" onChange={this.setDifficulty}>
            {_.keys(diffValues).map(this.renderDifficulty)}
          </select>
        </div>
      </form>
    );
  }
}

export default DifficultyForm
