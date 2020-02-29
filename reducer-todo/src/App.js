import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';




export default function App() {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  )
}
