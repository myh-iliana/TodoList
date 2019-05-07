import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer);

import rootReducer from '../reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const save = store => {
//     const next = store.dispatch;
//
//     return action => {
//         // if (action.type === 'ADD_TODO') {
//         //     // localStorage.setItem('todos,' todos);
//         //
//         // }
//         const res = next(action);
//         console.log('next state', store.getState());
//         // return next(action);
//         return res;
//     };
// };

// const save = store => next => action => {
//     if (action.type === 'ADD_TODO') {
//         const stateTodos = JSON.stringify(store.getState().todos);
//
//         localStorage.setItem('todos', stateTodos);
//     } else if (action.type === 'DELETE_TODO') {
//         const stateTodos = JSON.stringify(store.getState().todos);
//
//         localStorage.setItem('todos', stateTodos);
//     } else if (action.type === 'TOGGLE_TODO') {
//         const stateTodos = JSON.stringify(store.getState().todos);
//
//         localStorage.setItem('todos', stateTodos);
//     }
//
//     return next(action);
// };

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);