// Import EventEmitter from the 'events' module
import { EventEmitter } from 'events';

// Create a new EventEmitter instance
const myEmitter = new EventEmitter();

// Define an event handler for the 'greet' event
function greetHandler(name) {
    console.log(`Hello ${name}`);
}

// Define an event handler for the 'goodbye' event
function goodbyeHandler(name) {
    console.log(`Goodbye ${name}`);
}

// Register event listeners
myEmitter.on('greet', greetHandler);  // Listen for the 'greet' event
myEmitter.on('goodbye', goodbyeHandler); // Listen for the 'goodbye' event


// Emit Events
myEmitter.emit('greet', 'John'); // you dont have to but you can pass arguments into functions as well using the second parameter if the function being called needs it
myEmitter.emit('goodbye', 'John');

// Error handling: Listen for 'error' events
myEmitter.on('error', (err) => {
    console.log('An Error Occurred:', err);
});

// Simulate an error by emitting an 'error' event
myEmitter.emit('error', new Error('Something went wrong'));
