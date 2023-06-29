import React from "react";
import "./Home.css";

import Filter from "./components/Filter/Filter";
import Event from "./components/Event/Event";
import League from "./components/League/League";
import MatchResult from "./components/MatchResult/MatchResult";

function Home() {
  return (
    <div className="home">
      <div className="h_highlights">
        <div className="h_highlightsList">
          <Filter filterName="Football" />
          <Filter filterName="Basketball" />
          <Filter filterName="RedBull Half Court 23'" />
          <Filter filterName="Izmir Institute of Technology" />
          <Filter filterName="Sailing" />
          <Filter filterName="Rhythm Dance Academy" />
          <Filter filterName="Tennis" />
          <Filter filterName="Urla İskele Yacht Club" />
        </div>
      </div>
      <div className="h_leagues">
        <p className="sectionTitle">Leagues you follow</p>
        <div className="h_leaguesList">
          <League />
          <League />
          <League />
          <League />
          <League />
          <League />
          <League />
          <League />
          <League />
        </div>
      </div>
      <div className="h_recentMatches">
      <p className="sectionTitle">Recent Matches</p>
        <div className="h_recentMatchesList">
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <MatchResult />
          <div className="h_matchResultGap"/>
        </div>
      </div>
      <div className="h_events">
      <p className="sectionTitle">Around <b>İzmir</b></p>
        <div className="h_eventsList">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <div className="h_eventGap"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
