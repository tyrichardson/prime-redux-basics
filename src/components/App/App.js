import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      newElement: '',
    }
  }

  handleChange = (event) =>
    this.setState({
      newElement: event.target.value
  })

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <pre>{JSON.stringify(this.props.reduxState)}</pre>
        <button
          onClick={() => (this.props.dispatch({ type: 'BUTTON_ONE' }))}>
          Button One
        </button>
        <button
          onClick={() => (this.props.dispatch({ type: 'BUTTON_TWO' }))}>
          Button Two
        </button>
        <input
          onChange={this.handleChange} type="text" placeholder='type a string'>
        </input>
        <button
          onClick={() => (this.props.dispatch({ type: 'ADD_ELEMENT', payload: this.state.newElement }))}>
          Add Element
        </button>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);
