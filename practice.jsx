/*
If the expression on the left of the && evaluates as true, 
then the JSX on the right of the && will be rendered.
 If the first expression is false, however,
  then the JSX to the right of the && will be ignored and not rendered.

*/

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
    <div>
        <h1>My Favorite Foods</h1>
        <ul>
            <li>Sushi Burrito</li>
            <li>Rhubarb Pie</li>
            {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
            <li>Broiled Grapefruit</li>
        </ul>
    </div>
);

ReactDOM.render(
    favoriteFoods,
    document.getElementById('app')
);

/*
Using the .map() method
*/

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>
    {person}</li>;
<ul>{peopleLis}</ul>
  

);

ReactDOM.render(<ul> {peopleLis}</ul>, document.getElementById('app'))

// Assigning keys 

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
    <li key={'person_' + i}>{person}</li>;
<ul>{peopleLis}</ul>

  

);

ReactDOM.render(<ul> {peopleLis}</ul>, document.getElementById('app'))

// Practicing ternary operator from scratch

import { animals } from './animals';
import React from "react"
import ReactDOM from "react-dom"

const title = ""

const animalFacts = <h1>{(title === '' ? 'Click an animal for a fun fact' : title)}</h1>

ReactDOM.render(animalFacts, document.getElementById("root"))

//Practicing for in loop 

const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            ariaLabel={animal}
            role='button'
        />
    )
}

const animalFacts =
    <div>

        <h1>{(title === '' ? 'Click an animal for a fun fact' : title)}</h1>
        {background}
        <div className="animals">{images}</div>
    </div>

ReactDOM.render(animalFacts, document.getElementById("root"))

export const animals = {
    dolphin: {
        image: '/images/dolphin.jpg',
        facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
        image: '/images/lobster.jpg',
        facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
        image: '/images/starfish.jpg',
        facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
};
//