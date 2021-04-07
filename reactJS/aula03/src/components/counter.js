import React, { Component } from 'react'
import css from './counter.module.css';
import IncrementButton from './IncrementButton';

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            currentCounter: 2, steps: 0
        }
    }

    handleClickDown =() => {
        const {currentCounter, steps} = this.state;
        this.setState({
            currentCounter: currentCounter - 1,
            steps: steps + 1
        })
    }
    handleClickUp =() => {
        const {currentCounter, steps} = this.state;
        this.setState({
            currentCounter: currentCounter + 1,
            steps: steps + 1
        })
    }
    
    render() {
        const {currentCounter, steps} = this.state;
        return (
            <div className={css.counterContainer} >
                <button 
                    onClick={this.handleClickDown}
                    className="waves-effect waves-light btn red darken-4">-
                </button>
                <span 
                    className={css.counterValue}>{currentCounter}
                </span>
                <button 
                    onClick={this.handleClickUp}
                    className="waves-effect waves-light btn gren darken-4">+
                </button>
                <span className={css.counterValue}>({steps})</span>
            </div>
        )
    }
}
