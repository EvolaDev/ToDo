import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, index }) {
  return (
    <li>
      {/* To-Do list should be started by 1-st element */}
      <strong>{++index}</strong>
      {todo.title}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
