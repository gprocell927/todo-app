import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  _buildStatement(items) {
    let statement = `Only <span>${items.length}</span> Tasks. Relax or add one below.`

    if (items.length === 1) {
      statement = 'Only <span>1</span> Task'
    } else if (items.length > 1) {
      statement = `Only <span>${items.length}</span> Tasks`
    }

    return {__html: statement}
  }

  render() {
    const { items, } = this.props

    return (
      <div className="Summary">
        <div className="wrapper">
          <p className="statement" dangerouslySetInnerHTML={this._buildStatement(items)} />
        </div>
      </div>
    )
  }
}

export default Summary
