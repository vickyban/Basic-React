import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: 'Hello'
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value.trim()  // remove whitespace from the input
    })
  }

  submit = () => {
    //console.log(this.text.value)
    console.log(this.email)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" />
        </header>
        <h3>{this.state.input}</h3>
        <input type="text" onChange={this.updateInput} value={this.state.input}></input>
        <input type="email" ref={(input) => this.email = input}></input>
        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App;
