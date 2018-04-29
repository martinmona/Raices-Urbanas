import React, { Component } from 'react';
import './CSS/Content.css';
import PropTypes from 'prop-types';



class Content extends Component {
  static propTypes = {
    children: PropTypes.object.isRequiered
  };
  render() {
    const {body} = this.props;

    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;
