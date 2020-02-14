import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'

export default class TechCard extends Component {

module;

  constructor(props) {
    super();
    module = require('../../assets/content/' + props.markdownFile);
    this.state = {
        markdown: 'default', 
        title: props.title, 
        file: props.markdownFile };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    
    fetch(module)
        .then(res => res.text())
        .then(text => this.setState({ markdown: text }))
  }

  render() {
    return (
      <div class="card bg-light">
        <div class="card-body">
          <h4 class="card-title">{this.state.title}</h4>
          <div class="card-text">
            <ReactMarkdown source={this.state.markdown} />
          </div>
        </div>
      </div>
    )
  }
}
