import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

import Input from '../components/Input.jsx';

function mapDispatchToProps(dispatch) {
    return {
        onAddTodo: (value, date, tags) => dispatch(addTodo(value, date, tags))
    };
}

class AddTodo extends Component {
    render() {
        return (
            <Input placeholder='What needs to be done?' onEnter={this.props.onAddTodo} />
        );
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);