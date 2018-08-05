import React, { Component } from "react";

class App extends React.Component {
  state = {
    startCounter: 0,
  };

  addCounterFunction = () => {
    this.setState({
      startCounter: this.state.startCounter + 1
    });
  };

  subtractCounterFunction = () => {
    this.setState({
      startCounter: this.state.startCounter - 1
    });
  };

  addFiveFunction = () => {
    this.setState({
      startCounter: this.state.startCounter + 5
    })
  }

  resetCounter = () => {
    this.setState({
      startCounter: this.state.startCounter = 0
    })
  }

  componentDidMount() {
    const lastState = JSON.parse(localStorage.getItem('AppState'))

    if (lastState === null) return

    this.setState(lastState)
}

componentDidUpdate() {
    localStorage.setItem('AppState', JSON.stringify(this.state))
}

  render() {
    return (
      <div>
        <h1>{this.state.startCounter}</h1>
        <button onClick={this.addCounterFunction}> + </button>
        <button onClick={this.subtractCounterFunction}> - </button>
        <button onClick={this.addFiveFunction}> +5 </button>
       <br /> <button onClick={this.resetCounter}> Reset to 0 </button>
      </div>
    );
  }
}

export default App;
