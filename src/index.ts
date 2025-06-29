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
function printMainMenu() {
    console.log(" 1. Create User");
    console.log(" 2. Load User");
    console.log(" 3. Delete User");
    console.log(" 4. Help Menu");
    console.log(" 5. Quit");
    console.log("===================");
}

function promptMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        if (answer === "1") {
            //call create user menue
            console.log("...creating user...");
            rl.close();
        } else if (answer === "2") {
            // load user code here
            console.log("...loading user...");
            rl.close();
        } else if (answer === "3") {
            // deleting user code here
            console.log("...deleting user...");
            rl.close();
        } else if (answer === "4") {
            // call the help menu
            console.log("...help menu under construction...Sorry!");
            rl.close();
        } else if (answer === "5") {
            console.log("Goodbye!");
            rl.close();
            process.exit(0);
        } else {
          console.log("Invalid option. Please try again.");
          promptMenu(); // ask again!
        }
    });
}


// main loop
printMainMenu();
promptMenu();