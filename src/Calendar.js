import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
  render() {
    const { date, previous, today, next } = this.props

    return (
      <div className="Calendar">
        <h3>Today</h3>
        <div className="row">
          <div className="previous">
            <a onClick={() => previous()}>Yesterday</a>
          </div>
          <div className="date">
            <a onClick={() => today()}>
              {date.format('ddd')}
              <span>{date.format('D')}</span>
              {date.format('MMM')}
            </a>
          </div>
          <div className="next">
            <a onClick={() => next()}>Tomorrow</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;
