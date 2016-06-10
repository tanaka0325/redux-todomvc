import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import TodoInput from './TodoInput'

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

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
