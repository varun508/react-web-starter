import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      items: [1, 2, 3, 4, 5]
    }
  }

  handleClick(e) {
    const items = [this.state.items, 6];
    this.setState({ items })
  }

  render() {
    return (
      <div>{this.state.items.map(num => (<h3 key={num}>{num}</h3>))}
        <button onClick={this.handleClick.bind(this)} >click</button>
      </div>
    );
  }
}
