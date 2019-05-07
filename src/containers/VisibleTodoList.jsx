import { connect } from 'react-redux';

import {toggleTodo, deleteTodo, editTodo, doneEditTodo } from "../actions";

import TodoList from '../components/TodoList.jsx';

function filterTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL': return todos;

        case 'SHOW_NEW': return todos.filter(todo => !todo.completed);

        case 'SHOW_COMPLETED': return todos.filter(todo => todo.completed);
    }
}

function searchTodos(todos, search) {
    return todos.filter(todo => {
        if (search.text !== '' && search.tags === null) {
            return todo.text.search(new RegExp('' + search.text + '', 'ig')) !== -1
        } else if (search.text === '' && search.tags !== null) {
            const searchTags = search.tags.join(' ');
            const todoTags = todo.tags.join(' ');

            return todoTags.search(new RegExp('' + searchTags + '', 'igm')) !== -1
        } else if (search.text !== '' && search.tags !== null) {
            const searchTags = search.tags.join(' ');
            const todoTags = todo.tags.join(' ');

            return todo.text.search(new RegExp('' + search.text + '', 'ig')) !== -1
            && todoTags.search(new RegExp('' + searchTags + '', 'igm')) !== -1
        }
    })
}

const mapStateToProps = state => {
    return {
        todos:
            state.search.text !== '' || state.search.tags !== null
                ? searchTodos(state.todos, state.search)
                : filterTodos(state.todos, state.filter)
    }
};

const mapDispatchToProps = (dispatch) => ({
    onToggleTodo: (value) => dispatch(toggleTodo(value)),
    onDeleteTodo: (value) => dispatch(deleteTodo(value)),
    onEditTodo: (value) => dispatch(editTodo(value)),
    onDoneEditTodo: (id, value) => dispatch(doneEditTodo(id, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);