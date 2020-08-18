import React from 'react';
import TodoList from './components/TodoList';
import Context from './context';

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

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>To-Do List</h1>
        <TodoList todoArray={todoArray} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
