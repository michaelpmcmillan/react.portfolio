import React, { Component } from 'react';
import logo from './assets/logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        
        <div className="profile-pic">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        { this.props.children }
      </div>
    )
  }
}
