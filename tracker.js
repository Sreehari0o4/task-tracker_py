const args = process.argv
/* 
process.argv is an array that holds all command-line arguments.

The first two items are always:
The path to Node.js
The path to your script

Any arguments after that are your actual inputs.

*/

console.log("Full arguments:", args);
console.log("Command:",args[2]);
console.log("Task:",args[3]);