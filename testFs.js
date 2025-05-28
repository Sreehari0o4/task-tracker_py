const fs = require('fs');

// 1. Save a task
const task = { tasks: ["Practice coding"] };
fs.writeFileSync("tasks.json", JSON.stringify(task));

// 2. Read and log it
const content = fs.readFileSync("tasks.json", "utf-8");
const loaded = JSON.parse(content);
console.log(loaded);
