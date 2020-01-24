import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import TechMarkdown from './tech.md'

export default class TechCard extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(TechMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
      <div class="card bg-light col-sm-5">
        <div class="card-body">
          <h4 class="card-title">Technology</h4>
          <div class="card-text">
            <ReactMarkdown source={markdown} />
            {/* Proficient:
            <ul>
              <li>C# .NET</li>
              <li>Agile/Scrum</li>
              <li>Entity Framework, Linq</li>
              <li>SQL Server, TSQL</li>
              <li>WPF/XAML with MVVM pattern</li>
              <li>WCF</li>
              <li>Powershell</li>
            </ul>
            Researching:
            <ul>
              <li>asp.net core, razor pages</li>
              <li>javascript, bootstrap</li>
              <li>angular</li>
              <li>python</li>
            </ul> */}
          </div>
        </div>
      </div>
    )
  }
}
