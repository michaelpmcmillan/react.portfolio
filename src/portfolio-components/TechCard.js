import React, { Component } from 'react';

export default class TechCard extends Component {
  render() {
    return (
      <div class="card bg-light col-sm-5">
        <div class="card-body">
          <h4 class="card-title">Technology</h4>
          <div class="card-text">
            Proficient:
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
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
