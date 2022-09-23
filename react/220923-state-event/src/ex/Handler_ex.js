import React, { Component } from 'react';

class Handler_ex extends Component {
    state = {
        message: "Hello World!"
    }

    eventClick = (e) => {
        this.setState({
            message: "Goodbye World!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={this.eventClick}>클릭</button>
            </div>
        )
    }
}

export default Handler_ex;