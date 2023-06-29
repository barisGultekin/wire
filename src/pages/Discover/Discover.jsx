import React from 'react'
import './Discover.css'

import sportBg from '../../assets/categoryIndicators/sports.png'
import leagueBg from '../../assets/categoryIndicators/leagues.png'
import teamBg from '../../assets/categoryIndicators/teams.png'
import eventBg from '../../assets/categoryIndicators/events.png'

import SportDiscoverBox from './components/Sport/SportDiscoverBox'
import TeamDiscoverBox from './components/Team/TeamDiscoverBox'
import LeagueDiscoverBox from './components/League/LeagueDiscoverBox'
import EventDiscoverBox from './components/Event/EventDiscoverBox'

function Discover() {
  return (
    <div className='discover'>
      <div className='d_row'>
        <div className='d_allBox' style={{ backgroundImage: `url(${sportBg})` }}>
          <p className='d_allTitle'>Sports</p>
        </div>
        <div className='d_categoryList'>
          
        </div>
      </div>

      <div className='d_row'>
        <div className='d_allBox' style={{ backgroundImage: `url(${leagueBg})` }}>
        <p className='d_allTitle'>Leagues</p>
        </div>
        <div className='d_categoryList'>
          
        </div>
      </div>

      <div className='d_row'>
        <div className='d_allBox' style={{ backgroundImage: `url(${teamBg})` }}>
        <p className='d_allTitle'>Teams</p>
        </div>
        <div className='d_categoryList'>
          <TeamDiscoverBox />
          <TeamDiscoverBox />
          <TeamDiscoverBox />
          <TeamDiscoverBox />
          <TeamDiscoverBox />
        </div>
      </div>

      <div className='d_row'>
        <div className='d_allBox' style={{ backgroundImage: `url(${eventBg})` }}>
        <p className='d_allTitle'>Events</p>
        </div>
        <div className='d_categoryList'>

        </div>
      </div>
    </div>
  )
}

export default Discover