import React, { Component } from 'react';
import { filter } from 'lodash';
import moment from 'moment';
import './App.css';
import Calendar from './Calendar';
import List from './List';

const getTodos = () => {
  const server = ('http://localhost:3000/todos')
  fetch(server, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
  .then(res => res.json())
  .then(res => console.log(res.todos)
  //res.todos.map((item) => {
  //   return {
  //     due_date: moment(item.due_date),
  //     description: item.description
  //   }
  //   }
  //  )
  ) 
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      adding: false,
      date: moment(),
      items: getTodos(),
    }
  }

  _createNewItem() {
    const { date } = this.state

    this.setState({
      items: [...this.state.items, { due_date: date, description: 'New Item' }],
    })
  }

  _today() {
    this.setState({ date: moment() })
  }

  _previous() {
    const { date } = this.state
    this.setState({ date: date.subtract(1, 'day') })
  }

  _next() {
    const { date } = this.state
    this.setState({ date: date.add(1, 'day') })
  }

  render() {
    const { items, date } = this.state
    const listItems = filter(items, (item) => {
      return item.due_date.isSame(date, 'day')
    })

    return (
      <div className="App">
        <Calendar {...this.state}
          today={this._today.bind(this)}
          previous={this._previous.bind(this)}
          next={this._next.bind(this)} />
        <List
          items={listItems}
          createNewItem={this._createNewItem.bind(this)} />
      </div>
    );
  }
}

export default App;
