import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import './TodoItem.css';

function TodoItem({ todo, onChange }) {
  const { removeTodo, editTodo, updateTitle, updateDescription } = useContext(Context);
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
        {todo.isEdited ? (
          <input
            value={todo.title}
            onChange={(event) => updateTitle(event.target.value, todo.id)}
          />
        ) : (
          <strong>{todo.title}:</strong>
        )}
        &nbsp;
        {todo.isEdited ? (
          <input
            value={todo.description}
            onChange={(event) => updateDescription(event.target.value, todo.id)}
          />
        ) : (
          todo.description
        )}
      </span>
      <div className="buttons__wrapper">
        <div
          className="edit-button"
          title="edit task"
          onClick={editTodo.bind(null, todo.id)}
        ></div>
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
  isEdited: PropTypes.bool,
};

export default TodoItem;
