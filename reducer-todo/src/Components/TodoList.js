import React, {useReducer, useState} from 'react'
import Todo from './Todo';
import './Todo.css';
import initialState from '../reducers/reducer';
import reducer from '../reducers/reducer';


  
const action1 = {
    type: 'ADD_TODO',
    payload: {
        item: 'Enjoy React from now on',
        id: 1234512345,
        completed: false
    }
}


export default function TodoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
    dispatch(action1);

    return (
        <div>
            {state.todos.map(item => 
             <Todo key={item.id} element={item} />
         )}            
        </div>
    )
}
