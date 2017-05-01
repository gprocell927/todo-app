import React, { Component } from 'react';
import './List.css';
import Summary from './Summary';
import CreateItemButton from './CreateItemButton';
import Checkmark from './Checkmark';

class List extends Component {
  render() {
    const { items, createNewItem, } = this.props

    return (
      <div className="List">
        <Summary {...this.props} />
        <CreateItemButton click={() => createNewItem()} />
        <hr />
        {items.length < 1 ?
            <Checkmark /> :
            <ul>
              {items.map((item, index) => {
                return (
                  <li
                    key={index}>{item.description}
                  </li>
                )
              })}
            </ul>}
      </div>
    )
  }
}

export default List
