// src/index.ts
import readline from "readline";
import { Tag, Task, Project, User } from "./types";
import { loadUsers, saveUsers, deleteUser } from "./data";


// testing setup
//console.log("Setup Successful!");

/*
// testing interacting with command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
    console.log(`Hello, ${answer}`);
    rl.close();
});
*/

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main Menu
console.log(" 1. Create User");
console.log(" 2. Load User");
console.log(" 3. Delete User");
console.log(" 4. Help Menu");
console.log(" 5. Quit");
console.log("===================");
promptMenu();

function promptMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        if (["1", "2", "3", "4", "5"].includes(answer)) {
            console.log("We hope you enjoy your trip through this door");
            rl.close();
        } else {
          console.log("Invalid option. Please try again.");
          promptMenu(); // ask again!
        }
    });
}
