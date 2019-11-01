import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ newTodo: value })
    console.log(this.state.newTodo)
  }

  handleClick(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.input.value];
    this.input.value = ''
    this.setState({ todos })
  }

  render() {
    return (
      <div>
        <form>
          <input ref={node => this.input = node} type="text" placeholder="todo" />
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (<li key={index}>{todo}</li>))}
        </ul>
      </div>
    );
  }
}
