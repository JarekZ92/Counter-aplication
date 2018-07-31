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
          
        )
    }


}

export default App
