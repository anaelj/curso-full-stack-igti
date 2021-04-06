import React, { Component } from 'react';
import Counter from './components/counter';

export default class App extends Component {
  constructor() {
    super();
    this.currentCounter = 2;
  }
  render() {
    return (
      <div>
        <Counter />
      </div>

    );
  }
}
