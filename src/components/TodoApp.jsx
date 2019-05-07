import React, { Component } from 'react';

import Footer from './Footer.jsx';
// import Search from './Search.jsx';

import AddTodo from '../containers/AddTodo.jsx';
import VisibleTodoList from '../containers/VisibleTodoList.jsx';
import SearchTodo from '../containers/SearchTodo.jsx';

import styles from './TodoApp.scss';

export default class TodoApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <SearchTodo />
                    <h2 className={styles.header}>To do</h2>
                    <div className={styles.app}>
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}