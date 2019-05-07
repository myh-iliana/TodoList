import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Todo.scss';

const ENTER_KEY = 13;

export default class Todo extends Component {
    state = {
        editText: this.props.text
    };

    handleTextChange = evt => {
        this.setState({
            editText: evt.target.value
        });
    };

    handleKeyDown = evt => {
        if (evt.keyCode === ENTER_KEY && this.state.editText !== '') {
            this.props.onDoneEdit(this.props.id, this.state.editText);
        }
    };

    handleToggle = () => {
        this.props.onToggle(this.props.id);

        gtag('event', 'toggleTask', {
            'event_category': 'todo_item',
            'event_action': 'toggle'
        });
    };

    handleDelete = () => {
        this.props.onDelete(this.props.id);

        gtag('event', 'deleteTask', {
            'event_category': 'todo_item',
            'event_action': 'delete'
        });
    };

    handleEdit = () => {
        this.props.onEdit(this.props.id);
    };

    render() {
        const { text, completed, editMode, dueDate, tags } = this.props;

        const deadline = Date.parse(dueDate) - Date.now();

        addEventListener('contextmenu', evt => {
            evt.preventDefault();
            return false;
        });

        if (editMode) {
            return (
                <div className={(deadline <= 0 && !completed) ? styles.container_deadline : styles.container}>
                    <FontAwesomeIcon
                        className={completed ? styles.icon_completed : styles.icon}
                        icon='pen'
                        onClick={this.handleEdit}
                    />
                    <textarea
                        className={styles.edit_mode}
                        value={this.state.editText}
                        onChange={this.handleTextChange}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>
            );
        } else {
            return (
                <div className={(deadline <= 0 && !completed) ? styles.container_deadline : styles.container}>
                    <FontAwesomeIcon
                        className={completed ? styles.icon_completed : styles.icon}
                        icon='pen'
                        onClick={this.handleEdit}
                    />
                    <div
                        className={completed ? styles.completed : styles.root}
                        onClick={this.handleToggle}
                        onContextMenu={this.handleDelete}
                        id='forTag'
                    >
                        <div className={styles.date}>{dueDate}</div>
                        {text}
                        <div className={styles.tag}>
                            {tags.join(' ')}
                        </div>
                    </div>
                </div>
            );
        }
    }
}