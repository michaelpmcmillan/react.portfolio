import React, { Component } from 'react';

export default class EsayCard extends Component {
  render() {
    return (
      <div class="row">
        <div class="card bg-light col">
          <div class="card-body">
            <h4 class="card-title">eSAY Solutions</h4>
            <h5 class="card-text">Software Developer <small>- 2008 to 2011</small></h5>
            <div class="card-text">
              <p>Here, I was a software developer for both mobile and server side components for Esay's WorkMobile project (<a href="http://www.workmobileforms.com">http://www.workmobileforms.com</a>).</p>
              <p>This role involved using C#, Java for Android and blackberry, Windows-Mobile, web-services, sql-server, and agile scrum. Esay provided training to help me fulfil my role, including offsite sql-server and WCF courses, and learning to program for the Android platform.</p>
              <p>Here I quickly proved my worth, and my advice was often sought to help work through complex issues.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
