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