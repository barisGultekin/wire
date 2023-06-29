import React from 'react'
import './Calendar.css'
import CalendarEvent from './components/CalendarEvent'

function Calendar() {
  return (
    <div className='calendar'>
      <div className='c_datePickerSection'>

      </div>
      <div className='c_eventsSection'>
        <CalendarEvent />
      </div>
    </div>
  )
}

export default Calendar