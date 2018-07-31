import React, { Component } from "react"

class App extends Component {
    state = {
        startCounter: 0
    }
    addCounterFunction = () => {
        this.setState({
            startCounter: this.state.startCounter + 1
        })
    }

    subtractCounterFunction = () => {
        this.setState({
            startCounter: this.state.startCounter -1
        })
    }

    render () {
        return(
            <div>
            <h1>{this.state.startCounter}</h1>
            <button onClick ={this.addCounterFunction}> - </button>
            <button onClick ={this.subtractCounterFunction}> + </button>


            </div>
        )
    }


}

export default App
