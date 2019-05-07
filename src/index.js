import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faPen, faCheck);

import './main.css';
import TodoApp from './components/TodoApp.jsx';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);