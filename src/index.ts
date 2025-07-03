// src/index.ts

import readline from "readline";
import { Tag, Task, Project, User } from "./types";
import fs from "fs";


//==========> MENUS <================

// Main Menu
function printMainMenu() {
    console.log("\n==== MAIN MENU ====");
    console.log(" 1. Create User");
    console.log(" 2. List Users");
    console.log(" 3. Delete User");
    console.log(" 4. Help Menu");
    console.log(" 5. Quit");
    console.log("===================\n");
}


// Project Menu
function printProjectMenu() {
    console.log("\n=== PROJECT MENU ===");
    console.log(" 1. Create Project");
    console.log(" 2. List Projects");
    console.log(" 3. Open Project");
    console.log(" 4. Delete Project");
    console.log(" 5. Return to Main Menu");
    console.log("===================\n");
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function promptMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        // create user
        if (answer === "1") {
            console.log("\n...creating user...");
            createUser();
        } else if (answer === "2") {
            // list users
            console.log("All users:", Users.map(u => u.username).join(", "));
            printMainMenu();
            promptMenu();
        } else if (answer === "3") {
            // delete user
            console.log("\n...deleting user...");
            printMainMenu();
            promptMenu();
        } else if (answer === "4") {
            // call the help menu
            console.log("\n...help menu under construction...Sorry!");
            printMainMenu();
            promptMenu();
        } else if (answer === "5") {
            console.log("\nGoodbye!\n");
            saveUsers(Users);
            rl.close();
            process.exit(0);
        } else {
          console.log("\nInvalid option. Please try again.");
          printMainMenu();
          promptMenu(); // ask again!
        }
    });
}

let Users: User[] = [];

function createUser() {
    rl.question("Enter new user name or enter c to cancel: ", (answer) => {
        if (answer.toLowerCase() === "c") {
            cancel();
            return;
        }
        if (Users.some(u => u.username === answer)) {
            console.log("Username already exists. ");
            createUser();
            return;
        }
        Users.push({ username: answer, projects: [] });
        saveUsers(Users);
        console.log(`\nWelcome, ${answer}!`);
        console.log("All users:", Users.map(u => u.username).join(", "));
        printMainMenu();
        promptMenu();
    });
}

// function to handle "C" to cancel during user creation
function cancel() {
    printMainMenu();
    promptMenu();
}

//-----------Data File Code----------------------------------
/*
JSON files are not like text logs—you can’t simply "append" a
single new JSON object to the end and expect the file to stay
valid. JSON files must always be a complete, valid JSON structure
(like an array or object) at every save.
*/

const DATA_FILE = "users.json";

// check if data file exists
function loadUsersFromFile() {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    try {
        const loadedUsers = JSON.parse(data);
        Users.push(...loadedUsers);
        console.log(`Loaded ${loadedUsers.length} user(s) from file.`);
    } catch (err) {
        console.error("Error parsing users.json:", err);
    }
  } else {
    console.log("\nNo existing data file found. Starting fresh.\n");
  }
}


function saveUsers(users: User[]): void {
    // stringify to JSON, write to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}


function deleteUser(username: string): void {
    // Load all users,
    // remove the one whose username matches,
    // save the array back to users.json
}



// ====> MAIN PROGRAM LOOP <====

loadUsersFromFile();
printMainMenu();
promptMenu();