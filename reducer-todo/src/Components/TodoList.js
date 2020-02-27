import React, {useReducer, useState} from 'react'
import Todo from './Todo';
import './Todo.css';
import initialState from '../reducers/reducer';
import reducer from '../reducers/reducer';


  

export default function TodoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
    dispatch({ type: 'ADD_TODO', payload: { item: "", completed: false } });

    return (
        <div>
            {state.map(item => 
             <Todo key={item.id} element={item} />
         )}            
        </div>
    )
}
