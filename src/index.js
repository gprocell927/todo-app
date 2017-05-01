import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import moment from 'moment'

let todos = require('./todos.json')
todos = todos.map((item) => {
  return {
    due_date: moment(item.due_date),
    description: item.description
  }
})// Mapped through todos in index to be able to test it more easily and pass it directly into App from ReactDOM.render


ReactDOM.render(
  <App todos={todos}/>,
  document.getElementById('root')
);
