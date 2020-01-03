import React, { Component } from 'react';
import SummaryCard from './portfolio-components/SummaryCard'
import TechCard from './portfolio-components/TechCard'
import ExperienceCard from './portfolio-components/ExperienceCard';
import EducationCard from './portfolio-components/EducationCard';
import ExtraCurricularCard from './portfolio-components/ExtraCurricularCard';
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio page">
        <div class="row">
          <SummaryCard />
          <TechCard />
        </div>
        <ExperienceCard />
        <EducationCard />
        <ExtraCurricularCard />
      </div>
    )
  }
}
