import React, {useReducer, useState} from 'react'
import { initialState, reducer } from '../reducers/reducer';
import './Todo.css';

export default function TodoForm(props) {
     const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState("");
    console.log(newTodo);
    

const handleChange = event => {
        event.preventDefault();
    setNewTodo(event.target.value);

}
//     const handleCompleted = e => {
//         if (e) e.preventDefault();
//         dispatch({type:'TOGGLE_COMPLETED', payload: true})
// }
    
    const clearTodo = e => {
        return dispatch({type: 'DELETE_TODO', payload:true })
    }

    
      
    const handleAdd = e => {
        if (e) e.preventDefault();
        return dispatch({ type: 'ADD_TODO', payload: {item: newTodo, id: Date.now, completed: false } })
    }

   
        return (
            <div>
                <form>
                <input name='todo'  value ={newTodo} place-holder='add todo here' onChange={handleChange}/>
                <button className ='add-todo' onClick ={handleAdd}>add todo</button>
                <button className='clear-all' onClick={clearTodo}> Clear Todo </button>
                </form>
            </div>
        )
    }


