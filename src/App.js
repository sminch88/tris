import React, { Component } from 'react';
//
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writex: true,
      board: [

      ]
    }

    for (let i = 0; i < 9; i++) {
      this.state.board.push(

        {
          idx: i,
          val: ""
        }
      )
    }
  }
  play(idx) {
    const text = this.state.writex ? 'x' : 'O';
    const board = this.state.board;

    //board[idx].val === "" ? board[idx].val = text : alert("stai barando!")
    if (board[idx].val === "") {
      board[idx].val = text

      this.setState({
        board: board,
        writex: !this.state.writex

      })
    };
    if (((board[0].val === "x" && board[1].val==="x" && board[2].val === "x") || 
     (board[0].val === "O" && board[1].val==="O" && board[2].val === "O")) ||
      
      ((board[3].val === "x" && board[4].val==="x" && board[5].val === "x") || 
     (board[3].val === "O" && board[4].val==="O" && board[5].val === "O")) ||
     
     ((board[6].val === "x" && board[7].val==="x" && board[8].val === "x") || 
     (board[6].val === "O" && board[7].val==="O" && board[8].val === "O")) ||
     
     ((board[0].val === "x" && board[3].val==="x" && board[6].val === "x") || 
     (board[0].val === "O" && board[3].val==="O" && board[6].val === "O")) ||
     
     ((board[2].val === "x" && board[5].val==="x" && board[8].val === "x") || 
     (board[2].val === "O" && board[5].val==="O" && board[8].val === "O")) ||
     
     ((board[0].val === "x" && board[4].val==="x" && board[8].val === "x") || 
    (board[0].val === "O" && board[4].val==="O" && board[8].val === "O")) ||
     
    ((board[2].val === "x" && board[4].val==="x" && board[6].val === "x") || 
     (board[2].val === "O" && board[4].val==="O" && board[6].val === "O")))
      
     
    {
      alert ("Hai vinto!!!")
    }

    

    // board[idx].val === "" ? board[idx].val = text : alert("stai barando!")
  }
  
    
  render() {
    return (
      <div>
        <div>
         
        {this.state.writex ? 'È il turno di x' : 'È il turno di O'}
          <div className="App">
            <div className="cell" onClick={() => { this.play(0) }}>{this.state.board[0].val}</div>
            <div className="cell" onClick={() => { this.play(1) }}>{this.state.board[1].val}</div>
            <div className="cell" onClick={() => { this.play(2) }}>{this.state.board[2].val}</div>
            <div className="cell" onClick={() => { this.play(3) }}>{this.state.board[3].val}</div>
            <div className="cell" onClick={() => { this.play(4) }}>{this.state.board[4].val}</div>
            <div className="cell" onClick={() => { this.play(5) }}>{this.state.board[5].val}</div>
            <div className="cell" onClick={() => { this.play(6) }}>{this.state.board[6].val}</div>
            <div className="cell" onClick={() => { this.play(7) }}>{this.state.board[7].val}</div>
            <div className="cell" onClick={() => { this.play(8) }}>{this.state.board[8].val}</div>
          </div>
        </div>
      </div>

    );
  }
}


export default App;
