import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard'
import ExperienceCard from './portfolio-components/ExperienceCard';
import EducationCard from './portfolio-components/EducationCard';
import ExtraCurricularCard from './portfolio-components/ExtraCurricularCard';
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio page">
        <div class="row">
          <PortfolioCard title="Summary" markdownFile="summary.md" />
          <PortfolioCard title="Tech" markdownFile="tech.md" />
        </div>
        <ExperienceCard />
        <EducationCard />
        <ExtraCurricularCard />
      </div>
    )
  }
}
