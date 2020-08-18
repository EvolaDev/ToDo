import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import './TodoItem.css';

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }
  return (
    <li>
      <span className={classes.join(' ')}>
        <input
          checked={todo.completed}
          type="checkbox"
          onChange={() => onChange(todo.id)}
        />
        {/* To-Do list should be started by 1-st element */}
        <strong>{++index}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button
        className="remove-button"
        title="remove task"
        onClick={removeTodo.bind(null, todo.id)}
      >
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
