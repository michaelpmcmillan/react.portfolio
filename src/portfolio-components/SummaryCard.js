import React, { Component } from 'react';

export default class SummaryCard extends Component {
  render() {
    return (
        <div class="card bg-light col-sm">
            <div class="card-body">
                <h4 class="card-title">Summary</h4>
                <div class="card-text">
                    <p>A Senior Software Engineer with over 10 years’  hands-on experience developing reliable, high-performing, n-tier applications.  Having mostly used the Microsoft technology stack in the aerospace sector, but also has hands on experience with Java.</p>
                    <p>I’m keen to keep learning new tech, such as Angular and dotnet-core, and to continuously improve upon my existing skill-set.</p>
                    <p>I’m open-minded and willing to be led and learn from others, whilst also able to mentor and pass on my hard-won knowledge.</p>
                </div>
            </div>
        </div>
    )
  }
}
