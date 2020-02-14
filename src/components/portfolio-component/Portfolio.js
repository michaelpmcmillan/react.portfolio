import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard'
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import './Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio page">
        <PortfolioCard title="Summary" markdownFile="summary.md" />
        <PortfolioCard title="Tech" markdownFile="tech.md" />
        <ExperienceCard />
        <EducationCard />
        <PortfolioCard title="Extra Curricular" markdownFile="extra-curricular.md" />
      </div>
    )
  }
}
