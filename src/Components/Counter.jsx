import React from "react";
import Attack from "../Image/attack.png";
import Defend from "../Image/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.HandleAttack = this.HandleAttack.bind(this);
    this.HandleDefence = this.HandleDefence.bind(this);
    this.state = {
      count: 0,
      gameStatus: "",
      lastPlay: ""
    };
  }

  HandleAttack = () => {
    this.setState((prevState) => {
      let newCount = prevState.count + Math.round(Math.random() * 10)

      return {
        count: newCount,
        gameStatus: newCount >= 10 ? "You won!" : "",
        lastPlay: "Attack",
      };
    });
  }

  HandleDefence = () => {
    this.setState((prevState) => {
      let newCount = prevState.count - Math.round(Math.random() * 10)

      return {
        count: newCount,
        lastPlay: "Defence",
        gameStatus: newCount <= -10 ? "You lost!" : "",
      };
    });
  }

  HandleRandomPlay = () => {
    this.setState(() => {
      let playMode = Math.round(Math.random());

      if(playMode == 0){
        this.HandleAttack();
      } else {
        this.HandleDefence();
      }
    });
  }

  HandleReset = () => {
    this.setState(() => {
      return {
        count: 0,
        gameStatus: "",
        lastPlay: ""
      };
    });
  }

  render() {
    return (
      <div className="row text-white text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You will win at +10 points and lose at -10 points!</p>
        <p>Lets Play: {this.state.lastPlay}</p>
        <h3>Game status: {this.state.gameStatus}</h3>
        <div className="row">
          <div className="col-6 col-md-3 offset-md-3">
            <img
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid green",
              }}
              className="p-2 rounded"
              src={Attack}
              onClick={this.HandleAttack}
            />
          </div>
          <div className="col-6 col-md-3">
            <img
              style={{
                width: "100%",
                cursor: "pointer",
                border: "1px solid red",
              }}
              className="p-2 rounded"
              src={Defend}  
              onClick={this.HandleDefence}
            />
          </div>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
              <button className="btn btn-secondary w-100 mt-2" onClick={this.HandleRandomPlay}>Random play</button>
              <br/>
              <button className="btn btn-warning w-100 mt-2" onClick={this.HandleReset}>Restart the Game</button>
        </div>
      </div>
    );
  }
}

export default Counter;
