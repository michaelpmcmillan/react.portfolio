import React, { Component } from 'react';

export default class ExtraCurricularCard extends Component {
  render() {
    return (
        <div class="row">
            <div class="card bg-light col">
                <div class="card-body">
                    <h4 class="card-title">Extracurricular / Hobbies</h4>
                    <div class="card-text">
                        <p>I’m passionate about learning new skills, and improving upon those I already have.  Currently, I am learning aspnet core, dotnet core, python and machine learning in my free time.  I attended the M-Cubed data-science conference in 2018 to further my exposure to ML.</p>
                        <p>I’m also interested in DevOps/CI/CD, and so I’ve spent some time looking into Docker / Kubernetes (minikube) / Jenkins / Ansible.  Whilst this isn’t my area of expertise, I am interested in learning more, and plan on spending more time in this domain.</p>
                        <p>I try to keep up-to-date by viewing the <a href="https://www.thoughtworks.com/radar">Thoughtworks’ Tech-Radar</a>, and generally following <a href="https://www.thoughtworks.com/profiles/martin-fowler">Martin Fowler</a> and reading his books; such as Continuous Delivery, and Accelerate.  I’m also making my way through the new C# in Depth 4th Edition by the legendary <a href="https://stackoverflow.com/users/22656/jon-skeet">Jon Skeet</a>, and have CLR via C# on my backlog.  I also use tech blog aggregators, such as <a href="http://blog.cwa.me.uk/">The Morning Brew, by Chris Alcock</a>.</p>
                        <p>I enjoy playing foosball, board games, and rocket league, I also enjoy climbing, running, yoga, and spending time with my family.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}



