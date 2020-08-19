import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddTodo.css';

function useStateBinder(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

function useTitleValue() {
  return useStateBinder();
}

function useDescriptionValue() {
  return useStateBinder();
}

function AddTodo({ onCreate }) {
  const title = useTitleValue('');
  const description = useDescriptionValue('');

  function submitHandler(event) {
    event.preventDefault();

    if (title.value().trim()) {
      onCreate({ title: title.value(), description: description.value() });
      title.clear();
      description.clear();
    } else {
      alert('title is required');
    }
  }

  return (
    <form className="todo-add-form" onSubmit={submitHandler}>
      <div className="input-fields">
        <div className="title-field-label">Title*:</div>
        <input className="title" {...title.bind} />
        <div className="description-field">
          <div className="description-field-label">Description:</div>
          <textarea className="description" {...description.bind} />
        </div>
      </div>
      <div className="submit-button__wrapper">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
