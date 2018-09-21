import CharacterCard from "./CharacterCard";
import React, { Component } from 'react';
import _ from 'lodash';
import './WordCard.css';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false,
        score: 100
    }
}
export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [this.state.guess] + c
        this.setState({ guess })
        if (guess.length === this.state.chars.length) {
            console.log(this.state.word)
            if (guess === this.state.word) {
                this.setState({ guess: [], completed: true })
            }
            else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 , score: this.state.score - 20})
            }
        }
    }

    reset = () => {
        this.setState({attempt: 1, score: 100})
    }
    render() {
        return (

            <div className="App">
                <p className="round">รอบที่ : {this.state.attempt === 5 || this.state.attempt === 6 ?  'Final' : this.state.attempt}</p>
                <p className="accuracy">ความแม่นยำ : {this.state.score}%</p>
                {this.state.attempt != 6 ?
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                            activationHandler={this.activationHandler} />
                    )
                    : <div><p className="gameover">จบละ</p> 
                    <button className="button" onClick={this.reset}>เล่นใหม่</button> </div> 
                }
                <div className="text-inner">
                    <p className="hint">{this.state.attempt === 2 ? "Hint 1: Hello" : ""}</p>
                    <p className="hint">{this.state.attempt === 3 ? "Hint 2: สวัสดี" : ""}</p>
                    <p className="completed">{this.state.completed ? <p className="Winner">ชนะแล้ววววววว</p> : " "}</p>
                </div>
            </div>
        )
    }
}