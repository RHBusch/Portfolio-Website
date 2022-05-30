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


//Practicing with nodes and classess 


/*Let’s begin by setting up the constructor for our Node class. Since nodes contain data, 
we want the constructor to expect a data argument of any type to be passed in. 
The constructor can assign the given argument to the data property of the Node instance.
Be sure to set the arguments to the appropriate properties in this class (i.e. this.data).

Underneath the Node class, instantiate a Node with any value and set it to firstNode. 
Then use console.log() to print out the instance’s data property.
 We should see the value that the node was instantiated with in the terminal.

Similar to how we created the data property in the constructor, let’s do the same with the next node property. 
When the node is first created, it is an orphan node (a node with no links). Set the next node to null.

Underneath the node we previously created, use console.log() to print out the instance’s next node property. 
Check that null is output in the terminal.


*/

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

const firstNode = new Node(5) //Instantiating a new node 

console.log(firstNode.data) // Calling firstNode's data property
console.log(firstNode.next) //Calling firstNode's


module.exports = Node;




/*
Implement the .setNextNode() method in the Node class.
 It should take node as an argument and update the next node property appropriately.

 To verify that our .setNextNode() performs as intended, let’s call the method on our Node instance. 
 Create a second Node instance and set it to secondNode. Link it to the firstNode by passing secondNode 
 to the call to setNextNode. Now let’s print out firstNode so we can see it in its entirety using console.log(). 
We should see the second node instance set to the next node property instead of the default null value.

*/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNextNode(node) {
        this.next = node
    }
}


const firstNode = new Node('I am an instance of a Node!');

const secondNode = new Node('node2');

firstNode.setNextNode(secondNode);

console.log(firstNode)


console.log(firstNode)

module.exports = Node;

/*
Inside .setNextNode(), check if the node argument is an instanceof the Node class.
 If the argument is a Node or null, set this.next equal to node. Otherwise, throw an error.

 We know that we can set the next node to another node, 
 so let’s verify that .setNextNode() will not accept an argument that is not a node.
Call the .setNextNode() method on our Node instance and pass it any argument that is not a node.
 We expect to see an error in the terminal because you didn’t set the next node to a Node instance.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node
        } else { throw new Error('Next node must be a member of the Node class.'); }
    }
}

setNextNode(0)

const firstNode = new Node('I am an instance of a Node!');

module.exports = Node;

/*
Let’s go ahead and create a simple .getNextNode() method that just returns the next node property.
Implement the .getNextNode() method in the Node class.

Using the Node instance that we have already created, verify that the .getNextNode() method 
returns the correct next node property by logging the call from firstNode.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }
    getNextNode(node) {
        return this.next
    }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('I am the next Node!');
firstNode.setNextNode(secondNode);

console.log(firstNode.getNextNode())

module.exports = Node;

/*
Outside of Node, instantiate three more nodes.

The first will represent our strawberry ice cream with the name, 'Berry Tasty'. Assign it to the variable, strawberryNode
The second will represent our vanilla ice cream with the value, 'Vanilla'. Assign it to the variable, vanillaNode
The third will represent our coconut ice cream with the value, 'Coconuts for Coconut'. Assign it to the variable, coconutNode

Now let’s put these ice cream nodes in order. 
vanilla goes first, followed by strawberry. Finally, coconut goes after strawberry.

Below the newly created nodes, use your .setNextNode() method so that:

strawberryNode is the next node of vanillaNode
coconutNode the next node of strawberryNode

Let’s walk through our ice cream nodes to make sure that they are linked in the correct order. 
Create a new currentNode and set it vanillaNode. We will use currentNode to iterate through the nodes, 
so declare it using let. Create a while loop that will only iterate when the currentNode is not null.

Inside the while loop, log out the currentNode’s data, and update currentNode to the next node.

We should see the ice cream flavors in order of vanilla, strawberry, and coconut in the terminal.

*/


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }

    getNextNode() {
        return this.next;
    }
}

const strawberryNode = new Node('Berry Tasty');

const vanillaNode = new Node('Vanilla');

const coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);

strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode

while (currentNode) {
    console.log(currentNode.data)
    currentNode = currentNode.getNextNode()
}

module.exports = Node;

/*Fill in the code to link together the 3 siblings nodes: youngest -> middle -> oldest.
Then, iterate through the nodes, starting at youngest to get oldest‘s name.*/

const oldest = new Node('John');
const middle = new Node('Jacob');
const youngest = new Node('Jingleheimer');

youngest.setNextNode(middle);
middle.setNextNode(oldest);

let currentSibling = youngest;
let oldestName = '';
while (currentSibling !== null) {
    oldestName = currentSibling.data;
    currentSibling = currentSibling.getNextNode();
}

console.log(`There goes ${oldestName} Schmidt!`);

/* 
The only property we need our linked list to have is a head, which we will add in our constructor. 
Inside the LinkedList class, define the constructor. 
It should take no parameters, and should set the list’s head to null.

Define an .addToHead() method that takes one parameter called data. 
Inside the method, create a Node const variable named newHead, and pass data as an argument.

Still inside your .addToHead() method, create a const variable named currentHead, 
and set it equal to the list’s head. Then change the list’s head to equal newHead.

Finally, still in your .addToHead() method, check if there is a current head to the list. 
If there is, set the list’s head’s next node to currentHead.

*/

const Node = require('./Node');

class LinkedList {
    constructor() { this.head = null }
    addToHead(data) {
        const newHead = new Node(data)
        const currentHead = this.head
        this.head = newHead
        if (currentHead != null) {
            this.head.setNextNode(currentHead)
        }
    }

}

module.exports = LinkedList;

/*

Define an .addToTail() method for the LinkedList that has one parameter called data. 
Create a variable named tail, and set it equal to the list’s head. 
tail is going to change throughout the method, so make it a let variable.

Now that tail is equal to the head of the list, we want to check if it has any value. 
If tail has no value, then that means the list was empty, 
and we will be creating the head and tail with the data passed in.
To do this, check if tail has no value.
 If so, set the list’s head equal to a new Node that takes data as an argument.

 If tail does have a value, that means the list is not empty. 
 In that case, we want to iterate through the list until we find the end, 
 so we can add tail to the end of the list.

To do this, create an else after your if statement.
 Inside it, make a while loop that runs while tail has a next node. 
 Inside the loop, set tail equal to its next node.

 Finally, inside the same else block, but outside the while loop, 
 set tail‘s next node equal to a new Node that takes data as an argument.


*/

const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode()
            };
            tail.setNextNode(new Node(data));
        }
    }
}


module.exports = LinkedList;

/*
Define a .removeHead() method that takes no parameters. 
Inside the method, create a const variable named removedHead and set it equal to the list’s head. 
We will use this to keep track of the original head of the list.


If removedHead has no value, return to end execution of the .removeHead() method.

Outside the if statement, set the list’s head equal to removedHead‘s next node.

Finally, return removedHead’s data.

*/

const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) { return removeHead() }
        this.head = removedHead.getNextNode()
        return removedHead.data;
    }

}

module.exports = LinkedList;




/*

Define a method named .printList(). Inside it, create:

A let variable named currentNode, and set it equal to the list’s head
Another let variable named output, and set it equal to '<head> '
Then, log output to the console

While currentNode doesn’t equal null, add its data and a ' ' to output. 
Then update currentNode to be its next node. Do this above your console.log() statement.

Finally, outside of the while loop, but before your console.log(), 
set output equal to itself concatenated with '<tail>'.

 */

const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output = output + '<tail>'
        console.log(output);

    }
}
module.exports = LinkedList;


/*
In seasons.js, define a LinkedList named seasons. Print it out – what do you expect to see?

Add 'summer' to the head of the seasons, then add 'spring' to the head. Print the list again.

Add 'fall' to the tail of seasons. Then add 'winter' to the tail and print the list again.

Finally, remove the element at the head of the list. Print the list to check that the correct element was removed.

*/



const LinkedList = require('./LinkedList');

const seasons = new LinkedList();
seasons.printList();

seasons.addToHead('summer');
seasons.addToHead('spring');

seasons.addToTail('fall');
seasons.addToTail('winter');

seasons.removeHead();
seasons.removeHead();

seasons.printList();





