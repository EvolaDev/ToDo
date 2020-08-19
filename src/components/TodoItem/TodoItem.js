import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
import './TodoItem.css';

function TodoItem({ todo, onChange }) {
  const {
    removeTodo,
    editTodo,
    updateTitle,
    updateDescription,
    saveTodo,
  } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }
  return (
    <li>
      <div className={`todo-content ${classes.join(' ')}`}>
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
          <div className="todo-title" title={todo.title}>
            <strong>{todo.title}:</strong>
          </div>
        )}
        &nbsp;
        {todo.isEdited ? (
          <input
            value={todo.description}
            onChange={(event) => updateDescription(event.target.value, todo.id)}
          />
        ) : (
          <div className="todo-description" title={todo.description}>
            {todo.description}
          </div>
        )}
      </div>
      <div className="buttons__wrapper">
        {todo.isEdited ? (
          <div
            className="save-button"
            title="save-changes"
            onClick={saveTodo.bind(null, todo.id)}
          ></div>
        ) : (
          <div
            className="edit-button"
            title="edit task"
            onClick={editTodo.bind(null, todo.id)}
          ></div>
        )}
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
