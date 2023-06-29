import React from "react";
import "./MatchResult.css";

import homeTeamLogo from "../../../../assets/teamLogos/homeTeamLogo.webp";
import awayTeamLogo from "../../../../assets/teamLogos/awayTeamLogo.webp";

function MatchResult() {
  return (
    <div className="matchResultBox">
      <div className="mr_home">

        <div className="mr_teamInfo">
          <div className="mr_teamLogoContainer">
            <img src={homeTeamLogo} alt="Kamsu Spor Kulübü" className="mr_teamLogo" />
          </div>

          <p className="mr_teamName">Kamsu Spor Kulübü</p>
        </div>
        
        <p className="mr_score">48</p>
      </div>

      <div className="mr_time">34:08</div>

      <div className="mr_away">
        <p className="mr_score">32</p>
        
        <div className="mr_teamInfo">
          <div className="mr_teamLogoContainer">
            <img src={awayTeamLogo} alt="Humboldt FC" className="mr_teamLogo" />
          </div>

          <p className="mr_teamName">Humboldt FC</p>
        </div>
      </div>
    </div>
  );
}

export default MatchResult;
