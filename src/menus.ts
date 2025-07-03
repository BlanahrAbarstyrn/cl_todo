// src/menus.ts
import { rl } from "./io";
import * as Data from "./data";
//import * as Types from "./types";
import { currentUser } from "./state";


// function to handle "C" to cancel during user creation
export function cancel() {
    printMainMenu();
    promptMenu();
}


// ========== Project Menu and Prompts ===========
export function printProjectMenu() {
    console.log(currentUser ? `\nActive user is ${currentUser.username}` : "\nReturn to Main Menu to create or select a user.");
    console.log("=== PROJECT MENU ===");
    console.log(" 1. Create Project");
    console.log(" 2. List Projects");
    console.log(" 3. Open Project");
    console.log(" 4. Delete Project");
    console.log(" 5. Return to Main Menu");
    console.log("===================\n");
}

export function promptProjectMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        // create project
        if (answer === "1") {
            console.log("\n...creating project...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "2") {
            // list projects
            console.log("\n...listing projects...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "3") {
            // open project
            console.log("\n...opening project...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "4") {
            // delete project
            console.log("\n...deleting project...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "5") {
            printMainMenu();
            promptMenu();
        } else {
          console.log("\nInvalid option. Please try again.");
          printProjectMenu();
          promptProjectMenu(); // ask again!
        }
    });
}



// ========== Main Menu and Prompts ===========

export function printMainMenu() {
    //console.clear();
    console.log(currentUser ? `\nActive user is ${currentUser.username}` : "\nCreate a new user, or Select a user from the user list.");
    console.log("==== MAIN MENU ====");
    console.log(" 1. Create User");
    console.log(" 2. List Users");
    console.log(" 3. Delete User");
    console.log(" 4. Help Menu");
    console.log(" 5. Quit");
    console.log("===================\n");
}


export function promptMenu() {
    rl.question("Enter numeric selection ", (answer) => {
        // create user
        if (answer === "1") {
            console.log("\n...creating user...");
            Data.createUser();
            return;
        } else if (answer === "2") {
            // list users
            Data.chooseUserMenu();
            return;
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
            Data.saveUsers(Data.Users);
            rl.close();
            process.exit(0);
        } else {
          console.log("\nInvalid option. Please try again.");
          printMainMenu();
          promptMenu(); // ask again!
        }
    });
}