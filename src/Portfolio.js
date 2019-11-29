import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        { this.props.children }
      </div>
    )
  }
}
