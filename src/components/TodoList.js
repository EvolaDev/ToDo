import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const resetStyles = {
  ul: {
    listStyles: 'none',
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={resetStyles.ul}>
      {props.todoArray.map((todo, index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todoArray: PropTypes.arrayOf(PropTypes.object),
};

export default TodoList;
