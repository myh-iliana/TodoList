import React, { Component } from 'react';

import styles from './Search.scss';

const regex = /#[a-z|A-Z|0-9]+/gm;

export default class Search extends Component {
    state = {
        text: ''
    };

    handleTextChange = evt => {
        const searchTags = evt.target.value.match(regex);
        const searchText = evt.target.value.replace(regex, '');

        this.setState({
            text: evt.target.value
        });

        this.props.onSearch(searchText, searchTags);
    };

    render() {
        return (
            <input
                type='text'
                className={styles.search}
                placeholder='Search...'
                onChange={this.handleTextChange}
                value={this.state.text}
            />
        );
    }
}