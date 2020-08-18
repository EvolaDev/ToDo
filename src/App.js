import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todoArray, setTodo] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
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

  return (
    <div className="wrapper">
      <h1>To-Do List</h1>

      <TodoList todoArray={todoArray} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
