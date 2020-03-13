import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard'
import '../../styles/Portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio page">
        <PortfolioCard title="Summary" markdownFile="summary.md" />
        <PortfolioCard title="Tech" markdownFile="tech.md" />
        <PortfolioCard title="On The Beach" markdownFile="onthebeach.md" />
        <PortfolioCard title="Ultra Electronics Airport Systems" markdownFile="ultra-senior-level.md" />
        <PortfolioCard title="Ultra Electronics Airport Systems" markdownFile="ultra-mid-level.md" />
        <PortfolioCard title="eSAY Solutions" markdownFile="esay.md" />
        <PortfolioCard title="Salford University" markdownFile="salford-university.md" />
        <PortfolioCard title="Tameside College" markdownFile="tameside-college.md" />
        <PortfolioCard title="Extra Curricular" markdownFile="extra-curricular.md" />
      </div>
    )
  }
}
