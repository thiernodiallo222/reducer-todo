import React, {useState, useReducer} from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import initialState from './reducers/reducer';
import todoReducer from './reducers/reducer';






export default function App() {


  return (
    <div>
      <TodoList />
    </div>
  )
}


  // const [state, dispatch] = useReducer(reducer, initialState)