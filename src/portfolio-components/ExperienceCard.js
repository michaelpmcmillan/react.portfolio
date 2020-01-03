import React, { Component } from 'react';
import UltraSeniorCard from './experience-components/UltraSeniorCard'
import UltraMidLevelCard from './experience-components/UltraMidLevelCard'
import EsayCard from './experience-components/EsayCard'

export default class ExperienceCard extends Component {
  render() {
    return (
      <div>
        <UltraSeniorCard />
        <UltraMidLevelCard />
        <EsayCard />
      </div>
    )
  }
}
