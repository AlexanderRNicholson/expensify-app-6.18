
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { setTimeout } from 'timers';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 0})); 
store.dispatch(addExpense({ description: 'Gas bill', amount: 0, createdAt: 1000})); 
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 0})); 

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));