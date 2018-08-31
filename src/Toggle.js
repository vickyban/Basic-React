import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';


const Toggle = ({ messageVisibility, toggleMessage }) => (
  <div>
    {messageVisibility
      && <p>You will see This message if redux action is toggled</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
  </div>
);


// get specific state from redux store
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleMessage, // all the action creators
}, dispatch);

// connect Toggle to redux store and export all
export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
