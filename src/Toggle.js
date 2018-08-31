import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage, getMovies } from './actions';


const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => (
  <div>
    {messageVisibility
      && <p>You will see This message if redux action is toggled</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
    <button onClick={getMovies}>Load Movies</button>
  </div>
);


// get specific state from redux store
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage, // all the action creators
  getMovies,
}, dispatch);

// connect Toggle to redux store and export all
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
