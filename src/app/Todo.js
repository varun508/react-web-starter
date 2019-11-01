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
    this.state.todos.push(this.input.value)
    this.input.value = ''
    this.setState({ todos: this.state.todos })
    this.input.focus()
  }

  removeTodo(index) {
    this.state.todos.splice(index, 1)
    this.setState({ todos: this.state.todos })
  }

  render() {
    return (
      <div>
        <form>
          <input ref={node => this.input = node} type="text" placeholder="todo" />
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, index) => (<li onClick={this.removeTodo.bind(this, index)} key={index}>{todo}</li>))}
        </ul>
      </div>
    );
  }
}
