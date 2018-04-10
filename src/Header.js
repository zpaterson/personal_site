import React, { Component } from 'react';
import './App.css';
import logo from "./images/logo3.png";


class Header extends Component {
  render() {
    return (
      <div>
      <div className="col-md-9 col-xs-9">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img className="App-logo-style" src={logo} alt="ZP" />
            </a>
        </div>
      </div>
      <div className="App-nav-style">
        <ul className="nav nav-pills">
          <li className="active App-li-style"><a href="#">About</a></li>
          <li className="App-li-style"><a href="#">Resume</a></li>
        </ul>
      </div>
     </div>
    );
  }
}

export default Header;
