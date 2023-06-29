import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

import './App.css';
import wireLogoYellow from './assets/logos/wireLogoYellow.svg';
import { FiSearch } from 'react-icons/fi'

import Home from './pages/Home/Home';
import Discover from './pages/Discover/Discover';
import Calendar from './pages/Calendar/Calendar';
import Account from './pages/Account';
import Settings from './pages/Settings';

import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import NavbarAuth from './pages/Authentication/NavbarAuth/NavbarAuth';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="NavigationBar">
            <img src={wireLogoYellow} alt="Wire" className='MainLogo' />
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/discover" activeClassName="active">Discover</NavLink>
              </li>
              <li>
                <NavLink to="/calendar" activeClassName="active">Calendar</NavLink>
              </li>
              <li>
                <NavLink to="/account" activeClassName="active">Account</NavLink>
              </li>
              <li>
                <NavLink to="/settings" activeClassName="active">Settings</NavLink>
              </li>
            </ul>
          </nav>

          <div className="Content">
            <div className="TopBar">
              <div className='searchBarBox'>
                <FiSearch size={".8em"} />
                <input type="text" placeholder="Search teams, leagues or events" className='topSearchBar' />
              </div>
              <div className='acocuntAccess'>
                <NavbarAuth />
              </div>

            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/account" element={<Account />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
