import React from 'react'
import './TeamDiscoverBox.css'

import teamIcon from '../../../../assets/teamLogos/homeTeamLogo.webp'

function TeamDiscoverBox() {
  return (
    <div className='teamDiscoverBox'>
        <div className='teamDiscoverLogoContainer'>
        <img src={teamIcon} alt="Humboldt FC" className='teamDiscoverLogo' />
      </div>
      <div className='teamDiscoverName'>
        Humboldt FC 
      </div>
    </div>
  )
}

export default TeamDiscoverBox