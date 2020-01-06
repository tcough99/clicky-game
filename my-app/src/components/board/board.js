import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);

const initialChars = [
    {
        name: 'Joel Embiid',
        img: 'img/images/joel-embiid.png',
        clicked: false
    },
    {
        name: 'Carmelo Anthony',
        img: 'img/images/carmelo-anthony.png',
        clicked: false
    },
    {
        name: 'Kobe Bryant',
        img: 'img/images/kobe-bryant.png',
        clicked: false
    },
    {
        name: 'Paul George',
        img: 'img/images/paul-george.png',
        clicked: false
    },
    {
        name: 'Ben Simmons',
        img: 'img/images/ben-simmons.png',
        clicked: false
    },
    {
        name: 'Chris Paul',
        img: 'img/images/chris-paul.png',
        clicked: false
    },
    {
        name: 'Donovan Mitchell',
        img: 'img/images/donovan-mitchell.png',
        clicked: false
    },
    {
        name: 'Kwahi Leonard',
        img: 'img/images/kwahi-leonard.png',
        clicked: false
    },

    {
        name: 'Michael Jordan',
        img: 'img/images/michael-jordan.png',
        clicked: false
    },
    {
        name: 'Kevin Durant',
        img: 'img/images/kevin-durant.png',
        clicked: false
    },
    {
        name: 'Kyrie Irving',
        img: 'img/images/kyrie-irving.png',
        clicked: false
    },
    {
        name: 'Lebron James',
        img: 'img/images/lebron-james.png',
        clicked: false
    },
    {
        name: 'Steph Curry',
        img: 'img/images/steph-curry.png',
        clicked: false
    },
    {
        name: 'James Harden',
        img: 'img/images/james-harden.png',
        clicked: false
    },
    {
        name: 'Russell Westbrook',
        img: 'img/images/russell-westbrook.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                score: 0
            },
            characters: shuffleArray(initialChars)
        };
    }

    onCharacterClick = (index) => {
        if (!this.state.characters[index].clicked) {
            this.setState({
                characters: shuffleArray(this.state.characters.map((character, current) => {
                    return (current === index) ? { ...character, clicked: true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map(character => { return { ...character, clicked: false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }

    }

    render() {
        return (
            <div className="Board">
                <FadeIn
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4> Here's a game to test your memory. Click a player and the images will shuffle.<br />Try not to click the same player twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox
                    characters={this.state.characters}
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}