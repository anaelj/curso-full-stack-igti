import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.currentCounter = 2;
    }
    render() {
        return (
            <div>
                <button className="waves-effect waves-light btn red darken-4">-</button>
                <span>{this.currentCounter}</span>
                <button className="waves-effect waves-light btn gren darken-4">+</button>
            </div>
        )
    }
}
