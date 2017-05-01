import React, { Component } from 'react';
import './CreateItemButton.css'

class CreateItemButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      adding: false,
      newItem: '',
    }
  }

  _toggleAdding() {
    this.setState({
      adding: !this.state.adding,
    })
  }

  render() {
    const { adding, } = this.state

    return (
      <div className="CreateItemButton">
        <a onClick={this._toggleAdding.bind(this)}>
          {adding ?
              <p><input autoFocus /><button onClick={this.props.click}>Add</button></p> :
            <p><span>+</span> Add New Task</p>}
        </a>
      </div>
    )
  }
}

export default CreateItemButton
