import React, { Component } from 'react';

import styles from './Input.scss';

const ENTER_KEY = 13;
const regex = /#[a-z|A-Z|0-9]+/gm;

export default class Input extends Component {
    state = {
        text: '',
        date: '',
        tags: []
    };

    handleTextChange = evt => {
        const match = evt.target.value.match(regex);

        this.setState({
            text: evt.target.value,
            tags: match
        });
    };

    handleDateChange = evt => {
        this.setState({
            date: evt.target.value
        });
    };

    handleKeyDown = evt => {
        if (evt.keyCode === ENTER_KEY && this.state.text !== '') {
            this.props.onEnter(this.state.text.replace(regex, ''), this.state.date, this.state.tags);
            this.setState(
                {text: '', tags: []}
                );

            gtag('event', 'addTask', {
                'event_category': 'todo_item',
                'event_action': 'add'

            });
        }
    };

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input_text}
                    type='text'
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    onKeyDown={this.handleKeyDown}
                />
                <input
                    className={styles.input_date}
                    type='date'
                    onChange={this.handleDateChange}
                />
            </div>
        );
    }
}

