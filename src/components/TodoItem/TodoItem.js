import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import './TodoItem.css';

function TodoItem({ todo, onChange }) {
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
        &nbsp;
        <strong>{todo.title}</strong>
        &nbsp;
        {todo.description}
      </span>
      <div className="buttons__wrapper">
        <div className="edit-button" title="edit task"></div>
        <div
          className="remove-button"
          title="remove task"
          onClick={removeTodo.bind(null, todo.id)}
        ></div>
      </div>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
