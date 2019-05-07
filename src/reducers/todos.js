function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                dueDate: action.dueDate,
                tags: action.tags,
                completed: false,
                editMode: false
            };

        case 'DELETE_TODO': {
            return state.id !== action.id;
        }

        case 'TOGGLE_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            }
        }

        case 'EDIT_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                editMode: true
            }
        }

        case 'DONE_EDIT_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                editMode: false,
                text: action.editText
            }
        }

        default: return state;
    }
}

export default function todos(state = JSON.parse(localStorage.getItem('todos')) || [], action) {
    switch (action.type) {
        case 'ADD_TODO': return [
            todo(undefined, action),
            ...state
        ];

        case 'DELETE_TODO': {
            return state.filter(item => todo(item, action));
        }

        case 'TOGGLE_TODO': {
            return state.map(item => todo(item, action));
        }

        case 'EDIT_TODO': {
            return state.map(item => todo(item, action));
        }

        case 'DONE_EDIT_TODO': {
            return state.map(item => todo(item, action));
        }

        default: return state;
    }

}