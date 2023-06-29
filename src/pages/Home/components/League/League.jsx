import React from 'react'
import './League.css'
import leagueIcon from '../../../../assets/leagueLogos/league_redbullOutriggd.png'

function League() {
  return (
    <div className='leagueBox'>
      <div className='leagueLogoContainer'>
        <img src={leagueIcon} alt="Redbull Outriggd" className='leagueLogo' />
      </div>
      <div className='leagueName'>
        Redbull Outriggd
      </div>
    </div>
  )
}

export default League