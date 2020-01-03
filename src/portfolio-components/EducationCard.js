import React, { Component } from 'react';
import SalfordUniversityCard from './education-components/SalfordUniversityCard'
import TamesideCollegeCard from './education-components/TamesideCollegeCard'

export default class EducationCard extends Component {
  render() {
    return (
      <div>
        <SalfordUniversityCard />
        <TamesideCollegeCard />
      </div>
    )
  }
}
