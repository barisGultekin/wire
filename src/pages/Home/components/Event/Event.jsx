import React from "react";
import "./Event.css";

import eventPic from '../../../../assets/eventPics/sail.png'

function Event() {
  return (
    <div className="eventBox" style={{ backgroundImage: `url(${eventPic})` }}>
      <div className="eventBoxDate">20 June 2023</div>
      <div className="eventBoxTitle">Jimmy Key Universail Yat Yarışları</div>
      <div className="eventBoxLocation">Urla, İskele</div>
    </div>
  );
}

export default Event;
