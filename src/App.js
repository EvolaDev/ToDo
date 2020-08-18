import React from 'react';
import TodoList from './components/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo/AddTodo';
import Modal from './components/Modal/Modal';

function App() {
  const [todoArray, setTodo] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить хлеб' },
  ]);

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

  function addTodo(title) {
    setTodo(
      todoArray.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>To-Do List</h1>
        <Modal />
        <AddTodo onCreate={addTodo} />
        {todoArray.length ? (
          <TodoList todoArray={todoArray} onToggle={toggleTodo} />
        ) : (
          <p>You have no tasks!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
