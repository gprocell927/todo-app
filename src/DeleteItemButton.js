import React, { Component } from 'react';
import './DeleteItemButton.css'

class DeleteItemButton extends Component {
  render() {
    const { adding, newItem, } = this.state

    return (
      <div className="DeleteItemButton">
        <a onClick={ this._deleteItem.bind(this) }>
          X
        </a>
      </div>
    )
  }
}

export default DeleteItemButton
