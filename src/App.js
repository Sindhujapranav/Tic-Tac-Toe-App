import React, { Component } from 'react';
import './App.css';
import Status from './status.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }

  checkWinner() {
    let winLines =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
    this.checkMatch(winLines)
  }

  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];

      if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        alert('You won');
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  handleClick(index) {

    if (this.state.player && !this.state.winner) {

      let newBoard = this.state.board

      if (this.state.board[index] === null) {

        newBoard[index] = this.state.player

        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })

        this.checkWinner()
      }
    }
  }


  setPlayer(player) {
    this.setState({ player })
  }


  renderBoxes() {
    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.handleClick(index)}>
          {box} </div>
    )
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TIC-TOE-GAME APP</h1>
          <h3>!!!Welcome to the TIC-TAC-TOE Game!!!</h3>
        </header>
        <Status
          player={this.state.player}
          setPlayer={(e) => { this.setPlayer(e) }}
          winner={this.state.winner}
        />
        <div className="board">
          {this.renderBoxes()}
        </div>
        <br />
        <br />
        <button disabled={!this.state.winner} onClick={() => this.reset()}> Reset</button >
      </div >
    );
  }
}

export default App;
