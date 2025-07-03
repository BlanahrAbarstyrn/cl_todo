// src/index.ts
import readline from "readline";
import { Tag, Task, Project, User } from "./types";
import { loadUsers, saveUsers, deleteUser } from "./data";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Main Menu
function printMainMenu() {
    console.log("\n==== MAIN MENU ====");
    console.log(" 1. Create User");
    console.log(" 2. Load User");
    console.log(" 3. Delete User");
    console.log(" 4. Help Menu");
    console.log(" 5. Quit");
    console.log("===================\n");
}

function promptMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        if (answer === "1") {
            console.log("\n...creating user...");
            createUser();
        } else if (answer === "2") {
            // load user code here
            console.log("\n...loading user...");
            printMainMenu();
            promptMenu();
        } else if (answer === "3") {
            // deleting user code here
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


function cancel() {
    printMainMenu();
    promptMenu();
}


//function saveUsers(users: User[]): void {
    // stringify to JSON, write to file
//}


// main loop
printMainMenu();
promptMenu();