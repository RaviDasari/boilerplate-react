import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import Todo from '../Todo';

export default function TodoList({ todos }) {
  return (
    <ul className="todo-list">
      {R.reverse(todos.list).map(todo => <Todo key={todo.id} {...todo} />)}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
