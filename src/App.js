import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './App.css';

const word = "hello";
class App extends Component {
  render() {
    return (
      <div>
        {
          Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
        }
      </div>
    );
  }
}

export default App;
