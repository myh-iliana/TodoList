import React, { Component } from 'react';

import Todo from './Todo.jsx';

export default class TodoList extends Component {
    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.props.todos));
    }

    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo =>
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            text={todo.text}
                            completed={todo.completed}
                            editMode={todo.editMode}
                            dueDate={todo.dueDate}
                            tags={todo.tags}
                            onToggle={this.props.onToggleTodo}
                            onDelete={this.props.onDeleteTodo}
                            onEdit={this.props.onEditTodo}
                            onDoneEdit={this.props.onDoneEditTodo}
                        />
                    )
                }
            </div>
        );
    }
}