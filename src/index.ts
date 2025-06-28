// src/index.ts
import readline from "readline";

// set up filesystem
import fs from "fs";
const DATA_FILE = "users.json";

// check if data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]");
}

// testing setup
//console.log("Setup Successful!");


// testing interacting with command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
    console.log(`Hello, ${answer}`);
    rl.close();
});

interface Tag {
    name: string;
}

interface Task {
    taskDescription: string;
    taskPriority: "today" | "this week" | "this month" | "whenever" | "ASAP!!!";
    isComplete: boolean;
    subTasks: Task[];
    tags: Tag[];
}

interface Project {
    projectName: string;
    projectDescription?: string;
    tasks: Task[];
    tags: Tag[];
}

interface User {
    username: string;
    projects: Project[];
}