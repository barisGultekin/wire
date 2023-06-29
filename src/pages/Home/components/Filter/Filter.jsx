import React from 'react'
import './Filter.css'

function Filter(props) {
  return (
    <div className="filter">
      {props.filterName}
    </div>
  )
}

export default Filter