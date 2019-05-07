export const addTodo = (text, dueDate, tags) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text,
    dueDate,
    tags
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});

export const editTodo = (id) => ({
    type: 'EDIT_TODO',
    id
});

export const doneEditTodo = (id, editText) => ({
    type: 'DONE_EDIT_TODO',
    id,
    editText
});

export const searchTodo = (searchText, searchTags) => ({
    type: 'SEARCH_TODO',
    searchText,
    searchTags
});