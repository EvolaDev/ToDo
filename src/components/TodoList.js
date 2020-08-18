import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';

function TodoList(props) {
  const sortedTasks = props.todoArray.sort((a, b) => {
    return a.title === b.title ? 0 : a.title < b.title ? 1 : -1;
  });
  return (
    <ul>
      {sortedTasks.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoArray: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
