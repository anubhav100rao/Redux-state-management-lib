import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import usersReducer from './features/Users'
import { addUser } from './features/Users';

const store = configureStore({
    reducer: {
        users: usersReducer,
    }
})

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

