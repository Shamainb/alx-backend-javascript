// 1-stdin.js

const readline = require('readline');

// Create an interface for reading data from the standard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
console.log('Welcome to Holberton School, what is your name?');

// Listen for the user's input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);

  // Close the readline interface
  rl.close();
});

// Event listener for when the readline interface is closed
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
