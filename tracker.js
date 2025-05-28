const fs = require('fs');

function loadTasks(){
    try {
        const data = fs.readFileSync('tasks.json', 'utf-8');
        return JSON.parse(data).tasks;
    } catch(err){
        return [];
    }
}// Load tasks from tasks.json

function saveTasks(tasks){
    fs.writeFileSync('tasks.json', JSON.stringify({tasks}, null, 2));
}// Save tasks to tasks.json

const command = process.argv[2];
// Get the command from the command line arguments

if (command === 'add'){
    const newTask = process.argv[3];
    const tasks = loadTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added: ${newTask}`);
}

else if (command === 'list'){
    const tasks = loadTasks();
    console.log('Tasks:');
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}