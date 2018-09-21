import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "hello";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value={word} />
      </div>
    );
  }
}

export default App;
