import React from 'react';
import Players from './Players';
import GameSettings from './GameSettings';
import "../App.css";


class Game extends React.Component {

  state = { 
  pointsToWin: 100,
  dices: [null, null],
  playersTurn: 1,
  winner: false,
  player1Name: "Player1",
  player1TotalScore: 0,
  player1CurrentScore: 0,
  player2Name: "Player2",
  player2TotalScore: 0,
  player2CurrentScore: 0,
  player1current: "currentplayer",
  player2current: "",
  player1winner: "",
  player2winner: ""
};


  handleDiceRoll = () => {
    const diceImage = {
      1: "Dice-1",
      2: "Dice-2",
      3: "Dice-3",
      4: "Dice-4",
      5: "Dice-5",
      6: "Dice-6",
    }


    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);

    this.setState({
      dices: [diceImage[dice1], diceImage[dice2]]
    });
    this.DiceSum(dice1, dice2);
    if (dice1 === 6 && dice2 === 6) {
      switch (this.state.playersTurn) {
        case 1:
          this.setState({ playersTurn: 2 }, () => {
            this.setState({ player1CurrentScore: 0 })
          })
          break;
        case 2:
          this.setState({ playersTurn: 1 }, () => {
            this.setState({ player2CurrentScore: 0 })
          })
          break;
        default:
      }
    }

  }
    DiceSum = (dice1, dice2) => {

      const sum = dice1 + dice2;

      if (this.state.playersTurn === 1) {
        this.setState({ player1CurrentScore: sum + this.state.player1CurrentScore });
      } else {
        this.setState({ player2CurrentScore: sum + this.state.player2CurrentScore });
      }
    }
  
  handleHold = () => {
    if (!this.state.winner) {
      const newState = {};


      if (this.state.playersTurn === 1) {
        newState.player1TotalScore =
          this.state.player1CurrentScore + this.state.player1TotalScore;
        newState.player1CurrentScore = 0;
        newState.playersTurn = 2;
        newState.player1current = "currentplayer";
        newState.player2current = "";

      } else if (this.state.playersTurn === 2) {
        newState.player2TotalScore =
          this.state.player2CurrentScore + this.state.player2TotalScore;
        newState.player2CurrentScore = 0;
        newState.playersTurn = 1;
        newState.player1current = "currentplayer";
        newState.player2current = "";
      }

      if (newState.player1TotalScore > this.state.pointsToWin) {
        newState.winner = true;
        newState.player1Name = "Winner";
        newState.player1winner = "Winner";
        newState.player2current = "";
        newState.player1CurrentScore = "";
      } else if (newState.player2TotalScore > this.state.pointsToWin) {
        newState.winner = true;
        newState.player2Name = "Winner";
        newState.player2winner = "Winner";
        newState.player1current = "";
        newState.player2CurrentScore = "";
      }

      console.log(newState);
      this.setState(newState);
    }
  };



  handleInput = (input) => {
    if (input === "" || input === undefined) {
      this.setState({ pointsToWin: 100 });
    } else {
      this.setState({ pointsToWin: input });

    }
  }

    handleNewGame = () => {
      this.setState({ 
    pointsToWin: '',
    dices: [null, null],
    playersTurn: 1,
    winner: false,
    player1Name: "Player1",
    player1TotalScore: 0,
    player1CurrentScore: 0,
    player2Name: "Player2",
    player2TotalScore: 0,
    player2CurrentScore: 0,
    player1current: "currentplayer",
    player2current: "",
    player1winner: "",
    player2winner: ""
    });
    };


    render(){
    return (
      <div className="game-board">

        < Players name={this.state.player1Name}
          classes={this.state.player1current}
          isWinner={this.state.player1winner}
          totalScore={this.state.player1TotalScore}
          currentScore={this.state.player1CurrentScore}
          iconclass="bx bx-dice-1" />


        < GameSettings 
          diceImgs={this.state.dices}
          rollHandle={this.handleDiceRoll}
          holdHandle={this.handleHold}
          newGameHandle={this.handleNewGame}
          value={this.handleInput}
          pointsToWin={this.state.pointsToWin}
          disabled={this.state.isDisabled}
          text={this.state.text} />


        < Players name={this.state.player2Name}
          classes={this.state.player2current}
          isWinner={this.state.player2winner}
          totalScore={this.state.player2TotalScore}
          currentScore={this.state.player2CurrentScore}
          iconclass="bx bx-dice-2" />
      </div>
    )
  }
}

export default Game;

