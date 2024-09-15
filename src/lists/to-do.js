// src/components/TodoListComponent.js
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // To store the list of todo items
  const [newTodo, setNewTodo] = useState(''); // To store the current input value

  // Handle input change
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Handle adding a new item to the list 

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { // Ensure the input is not empty
      setTodos([...todos, newTodo]);
      setNewTodo(''); // Clear the input field
    }
  };

  // Handle deleting an item from the list
  const handleDeleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a new to-do item"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button
              className="delete-button"
              onClick={() => handleDeleteTodo(index)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
