import React, { Component } from 'react'

export default class IncrementButton extends Component {
    render() {
        return (
            <button 
                    onClick={this.handleClickUp}
                    className="waves-effect waves-light btn gren darken-4">+
            </button>
        )
    }
}
