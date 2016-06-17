import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

require('./app.scss');
import DifficultyForm from './components/DifficultyForm';
import GameBoard from './components/GameBoard';

@autobind
class App extends Component {
  constructor() {
    super();
    this.state = { gameBoard: [], mines: 0 };
  }

  updateState(state) {
    this.setState(state);
  }

  updateGameBoard(gameBoard) {
    this.setState({ gameBoard: gameBoard });
  }

  addMine() {
    this.setState({ mines: this.state.mines + 1 });
  }

  subtractMine() {
    if (this.state.mines > 0) this.setState({ mines: this.state.mines - 1 });
  }

  render() {
    return(
      <div className='container'>
        <div className='jumbotron'>
          <h1>Minesweeper</h1>
        </div>
        <DifficultyForm
          minesRemaining={this.state.mines}
          updateState={this.updateState}
        />
        <GameBoard
          gameBoard={this.state.gameBoard}
          minesRemaining={this.state.mines}
          updateGameBoard={this.updateGameBoard}
          addMine={this.addMine}
          subtractMine={this.subtractMine}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('app'));
