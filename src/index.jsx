import React from 'react'
import { render } from 'react-dom'
import { List, Map } from 'immutable'

import TodoApp from './components/TodoApp'

const filter = 'all'

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: false}),
  Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
)

require('../node_modules/todomvc-app-css/index.css')

render(
  <TodoApp todos={todos} filter={filter} />,
  document.getElementById('app')
)
