import React, { Component } from 'react';
import logo from '../images/mikemcmillan.jpg';
import '../styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home page">
        
        <img src={logo} className="profile-img" alt="Mike McMillan" />

        <h1 className="name">Mike McMillan</h1>
        <p>Software Engineer (11 Years)</p>
        <p>Based in Manchester, UK</p>
        
        <div className="contact-me-bar">
          <a href="https://www.linkedin.com/in/michaelpmcmillan/" className="text-secondary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="mailto:portfolio@mikemcmillan.dev" className="text-secondary" target="_blank" rel="noopener noreferrer">
            <i className="far fa-envelope fa-2x"></i>
          </a>
          <a href="https://github.com/mcmillanmichael" className="text-secondary" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>

        { this.props.children }
      </div>
    )
  }
}
