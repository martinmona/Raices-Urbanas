import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo}  alt="logo" />
          
        </div>
        <h2 >Arrancando la web</h2>
      </div>
    );
  }
}

export default Header;
