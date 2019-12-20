import React, { Component } from 'react';
import logo from './assets/mikemcmillan.jpg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home page">
        
        <img src={logo} className="profile-img" alt="Mike McMillan" />

        <h1 class="name">Mike McMillan</h1>
        <p>Software Engineer (11 Years)</p>
        <p>Based in Manchester, UK</p>
        
        <div class="contact-me-bar">
          <a href="https://www.linkedin.com/in/michaelpmcmillan/" class="text-secondary">
              <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:portfolio@mikemcmillan.dev" class="text-secondary">
            <i class="far fa-envelope fa-2x"></i>
          </a>
        </div>

        { this.props.children }
      </div>
    )
  }
}
