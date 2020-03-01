export const initialState = {
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
};
        
export const reducer = (state, action) => {
    switch (action.type) {
        
        case 'ADD_TODO':
            const newTodo = action.payload;
        
            return {
                ...state,
                todos: [ ...state.todos, newTodo]
            };
            
        // case 'TOGGLE_COMPLETED':
        //     const newState = {
        //         ...state,
        //         todos: [...state.todos]
        //     }
                 
        //     return newState.todos.map(todo => {
        //         if (todo.item === action.payload.item) {
        //             todo.completed = action.payload;
        //         }
        //         return newState;
        //     });
            
        // case 'DELETE_TODO':
        //     const newState1 = {
        //         ...state,
        //         todos: [...state.todos]
        //     }
        //     return newState1.todos.map(todo => {
        //         if (todo.completed === action.payload) {
        //             newState.todos.splice(newState.todos.indexOf(todo), 1);
        //         }
        //         return newState1;
        //     });
            
        default: return state;
    }
};
