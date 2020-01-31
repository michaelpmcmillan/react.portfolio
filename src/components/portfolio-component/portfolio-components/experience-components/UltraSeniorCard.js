import React, { Component } from 'react';

export default class UltraSeniorCard extends Component {
  render() {
    return (
      <div class="row">
        <div class="card bg-light col">
          <div class="card-body">
            <h4 class="card-title">Ultra Electronics Airport Systems</h4>
            <h5 class="card-text">Senior Software Engineer <small>- 2013 - Current</small></h5>
            <div class="card-text">
              <p>Over my first three years at Ultra; in recognition of my rapid growth, value to the company, and commitment to see the product succeed; I was awarded a promotion to Software Engineer 2 and then not long after another promotion up to Senior Software Engineer.  Here are some examples of why I was promoted to senior:</p>
              <ul>
                <li>Built a reputation for being approachable and helpful, so that I was often the go-to for developers asking for assistance.</li>
                <li>Conducting code reviews in a professional, constructive manner, looking out for performance impacts and change in behaviour, ensuring good code quality (SOLID, DRY), and querying what kind of testing had been conducted.</li>
                <li>Not being phased by taking on large pieces of work, including a system-wide database and ORM schema refactoring work</li>
                <li>Mentoring more junior members of the team, utilising pair programming, code reviews, and sharing my knowledge of certain areas of the product.</li>
                <li>Getting involved in the yearly graduate recruitment program by reviewing CV’s, conducting both telephone and face-to-face interviews, reviewing presentations and group exercises, and providing feedback to candidates.</li>
              </ul>
              <p>Since then, I’ve also taken on the role of data-chapter lead, which involves encouraging a group of engineers to start thinking about machine-learning from an R&D perspective, providing training opportunities for them, arranging hackathons and workshops where we can explore some of our ideas.</p>
              <p>I’ve also been encouraging the team to start thinking about code craftsmanship by arranging regular code-katas (<a href="http://codekata.com">http://codekata.com</a>) to help us refine our approach to software engineering.  During which, we’ve learnt how to better apply TDD, incremental code changes, small commits, and to properly think about writing SOLID, DRY code.  This has been invaluable experience, as it has provided the team with a forum to debate the most basic things</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
