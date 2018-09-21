import CharacterCard from "./CharacterCard";
import React, { Component } from 'react';
import _ from 'lodash';

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
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [this.state.guess]+c
        this.setState({guess})
        if(guess.length === this.state.chars.length){
            console.log(this.state.word )
            if(guess === this.state.word){
                this.setState({guess: [], completed: true})
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
    }


    render(){
        return(
            <div className="App">
                {
                    Array.from(this.state.chars).map(
                        (c, i) => <CharacterCard value = {c} key = {i} attempt={this.state.attempt}
                        activationHandler = {this.activationHandler}/>
                    )
                }
                <div className="result">
                {console.log(this.state.completed)}
                <p>Round : {this.state.attempt}</p>
                <p>{this.state.completed && this.state.attempt ==  1 ? "so clever, you can solved in first round." : ""}</p>
                <p>{this.state.completed && this.state.attempt >=  4 ? "good job but you should practice more." : ""}</p>
                <p>{this.state.completed == false && this.state.attempt >=  10 ? "you lose!!!!" : ""}</p>
                <p>{this.state.completed == false && this.state.attempt >=  10 ? this.state.attempt = 1 : ""}</p>
                <p>{this.state.completed ? alert('YOU ARE THE WINNER!') : ""}</p>
                </div>
            </div>
        )
    }
}