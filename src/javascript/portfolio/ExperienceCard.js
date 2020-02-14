import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard'

export default class ExperienceCard extends Component {
  render() {
    return (
      <div>
        <PortfolioCard title="Ultra Electronics Airport Systems" markdownFile="ultra-senior-level.md" />
        <PortfolioCard title="Ultra Electronics Airport Systems" markdownFile="ultra-mid-level.md" />
        <PortfolioCard title="eSAY Solutions" markdownFile="esay.md" />
      </div>
    )
  }
}
