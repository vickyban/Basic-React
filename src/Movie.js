import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Movie extends Component {
  // static because it's not gonna change
  // shape allows to check the datatype of the object's properties
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    desc: PropTypes.string
  };

  // can't set default value for nested properties (eg movie.desc)
  static defaultProps = {
    desc: 'Description not available'
  };

  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
