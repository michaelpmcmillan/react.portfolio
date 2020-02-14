import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard'

export default class EducationCard extends Component {
  render() {
    return (
      <div>
        <PortfolioCard title="Salford University" markdownFile="salford-university.md" />
        <PortfolioCard title="Tameside College" markdownFile="tameside-college.md" />
      </div>
    )
  }
}
