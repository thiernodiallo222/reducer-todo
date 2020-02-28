const initialState = {
    todos: [{
                item: 'Learn about reducers',
                completed: false,
                id: 3892987589
            },
    
            {
                item: 'Learn about redux',
                completed: false,
                id: 38921086123
            },
        
            {
                item: 'Learn context API',
                completed: false,
                id: 389298563451
        }]
}
        
const action1 = {
    type: 'ADD_TODO',
    payload: {
        item: 'Enjoy React from now on',
        id: 1234512345,
        completed: false
    }
}

     const reducer = (state = initialState, action) => {
        switch (action.type) {
        
            case 'ADD_TODO':
                const newTodo = action.payload;
        
         return {
             ...state,
             todos: [...state.todos, newTodo]
         }
            
            case 'TOGGLE_COMPLETED':
const newState ={
    ...state,
    todos: [ ...state.todos]
}
                 
                 return newState.todos.map(todo => {
                    if (todo.item == action.payload.item) {
                        todo.completed = action.payload.completed;
                        
    
            
                    }
                    return newState2;
                });
            
            case 'DELETE_TODO':
                const newState2 = {
                    ...state,
                todos: [ ...state.todos]
                };
 return newState.todos.map(todo => {
    if (todo.item == action.payload.item) {
        newState.todos.splice(newState.todos.indexOf(todo), 1);  
    }
    return newState3;
})
            
        default: return state;
    }
    }

export default reducer;