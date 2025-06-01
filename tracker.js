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
    const newTaskTitle = process.argv[3];
    const tasks = loadTasks();
    const newTask = { title: newTaskTitle, status: 'pending' };
    tasks.push(newTask);
    saveTasks(tasks);
    console.log(`Task added: ${newTaskTitle}`);
}

if (command === 'done'){
    const taskNumber = parseInt(process.argv[3]);
    const tasks = loadTasks();

    if(tasks[taskNumber -1]){
        tasks[taskNumber -1].status = 'done';
        saveTasks(tasks);
        console.log(`Marked task #${taskNumber} as done✅`);
    } else {
        console.log("here is no task with that number❌");
    }

} 

if (command === 'list'){
    const tasks = loadTasks();
    console.log('Tasks:');
    tasks.forEach((task, i) => {
        if (typeof task === 'string') {
      // handle old tasks
      console.log(`${i + 1}. 🕓 ${task}`);
    } else {
      const symbol = task.status === 'done' ? '✅' : '🕓';
      console.log(`${i + 1}. ${symbol} ${task.title}`);
    }
    });
}