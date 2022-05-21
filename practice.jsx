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
