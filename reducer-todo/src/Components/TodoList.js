import React, {useReducer, useState} from 'react'
import Todo from './Todo';
import './Todo.css';
import { initialState, reducer } from '../reducers/reducer';



export default function TodoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
   
  
    return (
        <div>
            {state.todos.map(item => 
             <Todo key={item.id} item={item} />
         )}            
        </div>
    )
}
