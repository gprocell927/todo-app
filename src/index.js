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
})


ReactDOM.render(
  <App todos={todos}/>,
  document.getElementById('root')
);
