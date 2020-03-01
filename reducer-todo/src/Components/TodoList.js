import React, {useReducer, useState} from 'react'
import Todo from './Todo';
import './Todo.css';
import { initialState, reducer } from '../reducers/reducer';
import './Style.css';


export default function TodoList() {
     const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState("");
    console.log(newTodo);
    

const handleChange = event => {
        event.preventDefault();
    setNewTodo(event.target.value);

}
    
    const clearTodo = e => {
        return dispatch({type: 'DELETE_TODO', payload:true })
    }

    
      
    const handleAdd = e => {
        if (e) e.preventDefault();
        const temp = newTodo;
         setNewTodo("");
        return dispatch({ type: 'ADD_TODO', payload: { item: temp, id: Date.now, completed: false }})
       
    }


    return (
        <div>
        
            {state.todos.map(item => 
                <Todo
                    key={item.id}
                    item={item}
                    clearTodo={clearTodo}
                    handleAdd={handleAdd}
                />)} 
            
                <form className ="imput-field">
                <input className="imput" name='todo' value={newTodo}place-holder='add todo here'
                        onChange={handleChange} />
                <button className ='add-todo' onClick ={handleAdd}>Add Todo</button>
                <button className='clear-all' onClick={clearTodo}> Clear Todo </button>
                </form>    
        </div>
    )
}
