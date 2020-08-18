import React from 'react';
import TodoList from './components/TodoList';

function App() {
const todoArray = [
 {id: 1, complited: false, title: 'Купить хлеб'}
]

  return (
    <div className="wrapper">
      <h1>To-Do List</h1>

      <TodoList todoArray={ todoArray }/>
    </div>
  );
}

export default App;
