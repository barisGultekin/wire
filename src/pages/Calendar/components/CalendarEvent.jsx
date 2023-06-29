import React from "react";
import "./CalendarEvent.css";

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsChevronCompactRight } from 'react-icons/bs'

function CalendarEvent() {
  return (
    <div className="calendarEvent">
      <div className="ce_eventImgContainer">
        
      </div>
      <div className="ce_titleContainer">
        <p className="ce_date">23 June 2023</p>
        <p className="ce_title">Event Title</p>
      </div>
      <div className="ce_location">
        <div className="ce_locationBox">
            <div className="ce_locationIcon">
                <HiOutlineLocationMarker size={"1.2em"}/>
            </div>
            <div className="ce_locationInfo">
                 İzmir
            </div>
        </div>
      </div>
      <div className="ce_chevron">
        <BsChevronCompactRight size={"4em"}/>
      </div>
    </div>
  );
}

export default CalendarEvent;
