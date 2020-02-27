const initialState = {
    todos:
        [
            {
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
            }
        ]
}

     const reducer = (state, action) => {
        switch (action.type) {
        
            case 'ADD_TODO':
                const newTodo = {
                    item: action.item,
                    id: action.id,
                    completed: action.completed
                }
                 return [ ...state.todos, newTodo ];
            
            case 'TOGGLE_COMPLETED':
                return state.map(todo => {
                    if (todo.item == action.payload.item) {
                        // { ...todo, completed: action.payload.completed}
            
                    }
                    return [...state, todo]
                });
            
    case 'DELETE_TODO':
return state.map(todo => {
    if (todo.item == action.payload.item) {
        const arr = [...state];
        arr.pop(todo);   
    }
    return state;
})
            
        default: return state;
    }
    }

export default reducer;