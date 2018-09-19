import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';

const word = "hello";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="hello" />
      </div>
    );
  }
}

export default App;
