import React from 'react'

import TodoInput from './TodoInput'

export default class TodoItem extends React.Component {
  render() {
    return(
      <li className="todo">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label htmlFor="todo">
            {this.props.text}
          </label>
          <button className="destroy"></button>
        </div>
        <TodoInput />
      </li>
    )
  }
}
