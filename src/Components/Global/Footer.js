// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assest
import './CSS/Footer.css';

class Footer extends Component {
  static propTypes ={
    copyright: PropTypes.string
  };
  
  render() {
    const { copyright = 'Martin Mona'} = this.props;
    return (
      <div className="Footer">
        <p> {copyright}</p>
      </div>
    );
  }
}

export default Footer;
