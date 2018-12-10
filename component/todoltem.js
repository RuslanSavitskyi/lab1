import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button class="btn btn-danger"   onClick={(e)=> this.removeTodo(this.props.id) }>Видалити</button>{this.props.todo.text}
      </div>
    );
  }
}
