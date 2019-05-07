import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTodo } from "../actions";

import Search from '../components/Search.jsx';

class SearchTodo extends Component {
    render() {
        return (
            <Search onSearch={this.props.onSearchTodo} />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchTodo: (searchText, searchTags) => dispatch(searchTodo(searchText, searchTags))
    }
}

export default connect(null, mapDispatchToProps)(SearchTodo);