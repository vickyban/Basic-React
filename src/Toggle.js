import React, { Component } from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility }) => (
  <div>
    {messageVisibility
      && <p>You will see This message if redux action is toggled</p>
    }
    <button>Toggle Me</button>
  </div>
);


// get specific state from redux store
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle); // connect Toggle to redux store and export all
