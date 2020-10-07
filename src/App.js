import React from 'react';
import './App.css';
import ToDoItem from './TodoItem';
import todosData from "./todosData";

const  App = () => {
  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item} />)
  return (
    <div className="todo-list">
      {todoItems}
    </div>
  );
}

export default App;
