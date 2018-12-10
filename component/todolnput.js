import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.todoText};

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div >
      <div class="blockInline">
        <input class="form-control" type="text" placeholder="Введіть ваші справи сюди…" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div class="blockInline">
        <button  class="btn btn-info"  onClick={() => this.addTodo(this.state.value)}>Додати</button>
        </div>
      </div>
    );
  }
}
