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
        completed: false
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
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
            }
        }
    }


    render() {
        return (

            <div className="App">
                <p className="round">รอบที่ : {this.state.attempt}</p>

                {this.state.attempt != 7 ?
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value={c} key={i} attempt={this.state.attempt}
                            activationHandler={this.activationHandler} />
                    )
                    : <p className="gameover">จบละ</p>
                }
                <div className="text-inner">
                    <p className="hint">{this.state.attempt === 3 ? "Hint 1: โรคบิดมีตัว" : ""}</p>
                    <p className="hint">{this.state.attempt === 5 ? "Hint 2: พบได้ในประเทศเขตร้อน" : ""}</p>
                    <p className="completed">{this.state.completed ? "EZ" : " "}</p>
                </div>
            </div>
        )
    }
}