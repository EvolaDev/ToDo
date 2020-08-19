import React from 'react';
import TodoList from './components/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const [todoArray, setTodo] = React.useState([]);

  function toggleTodo(id) {
    setTodo(
      todoArray.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodo(todoArray.filter((todo) => todo.id !== id));
  }

  function editTodo(id) {
    const editedTodo = todoArray.find((todo) => todo.id === id);
    editedTodo.isEdited = !editedTodo.isEdited;
    setTodo([...todoArray]);
  }

  function updateInput(type, value, id) {
    setTodo(
      todoArray.map((todo) => {
        if (todo.id === id) {
          todo[type] = value;
        }
        return todo;
      })
    );
  }

  function updateTitle(value, id) {
    const type = 'title';
    updateInput(type, value, id);
  }

  function updateDescription(value, id) {
    const type = 'description';
    updateInput(type, value, id);
  }

  function addTodo({ title, description }) {
    setTodo(
      todoArray.concat([
        {
          title,
          description,
          isEdited: false,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider
      value={{ removeTodo, editTodo, updateTitle, updateDescription }}
    >
      <div className="wrapper">
        <div className="page-title">
          <h1>To-Do List</h1>
        </div>
        <AddTodo onCreate={addTodo} />
        <TodoList todoArray={todoArray} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
