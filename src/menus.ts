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

// function to allow program to pause until user is ready to continue
function pauseAndContinue(nextStep: () => void) {
    rl.question("\nPress Enter to continue...", () => {
        nextStep();
    });
}


// ========== Project Menu and Prompts ===========
export function printProjectMenu() {
    console.log(currentUser ? `\nActive user is ${currentUser.username}` : "\nReturn to Main Menu to create or select a user.");
    console.log("=== PROJECT MENU ===");
    console.log(" 1. Create Project");
    console.log(" 2. Load Project from List");
    console.log(" 3. Delete Project");
    console.log(" 4. Return to Main Menu");
    console.log("===================\n");
}

export function promptProjectMenu() {
    rl.question("Enter numeric selection: ", (answer) => {
        // create project
        if (answer === "1") {
            console.log("\n...creating project...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "2") {
            // list projects
            console.log("\n...loading projects...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "3") {
            // delete project
            console.log("\n...deleting project...");
            printProjectMenu();
            promptProjectMenu();
        } else if (answer === "4") {
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
    console.log(" 2. Load User");
    console.log(" 3. Delete User");
    console.log(" 4. Help Menu");
    console.log(" 5. Quit");
    console.log("===================\n");
}


export function promptMenu() {
    rl.question("Enter numeric selection: ", (answer) => {
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
            Data.deleteUser();
            return;
        } else if (answer === "4") {
            // call the help menu
            printHelpMenu();
            promptHelpMenu()
            return;
        } else if (answer === "5") {
            // quit program
            console.log("\nGoodbye!\n");
            Data.saveUsers(Data.Users);
            rl.close();
            process.exit(0);
        } else {
            // input out of range
            console.log("\nInvalid option. Please try again.");
            printMainMenu();
            promptMenu(); // ask again!
        }
    });
}

// ========== Help Menu and Prompts ===========

export function printHelpMenu() {
    console.log("\n====== HELP MENU ======");
    console.log(" 1. Tag Suggestions");
    console.log(" 2. Return to Main Menu");
    console.log("=======================\n");
}

export function promptHelpMenu() {
    rl.question("Enter numeric selection: ", (answer) => {
        if (answer === "1") {
            to_doTags();
            pauseAndContinue(() => {
                printHelpMenu();
                promptHelpMenu();
            });
            return;
        } else if (answer === "2") {
            // return to main menu
            printMainMenu();
            promptMenu();
        } else {
            // input out of range
            console.log("\nInvalid option. Please try again.");
            printHelpMenu();
            promptHelpMenu(); // ask again!
        }
    });
}

// function to list tag suggestions
export function to_doTags() {
    console.clear();
    console.log("\n================ TAG HELP =========================================================\n");
    console.log("Create tags that will help you to organize or quick filter similar projects or tasks.");
    console.log("Keep in mind capitalization and spelling matter.\n");
    console.log("...Chore...chore...chor...will be treated as three different tags.\n");
    console.log("Projects, tasks and sub-tasks can be given more than one tag, but more isn't always better.")
    console.log("Tags can be anything your choose, but here are some suggestions if you're stuck:\n");
    console.log("Financial\n" +
        "Wellness\n" +
        "Chore\n" +
        "Housework\n" +
        "Repair\n" +
        "Personal\n" +
        "Goal\n" +
        "Educational\n" +
        "Maintenance\n" +
        "Entertainment\n" +
        "Fitness\n" +
        "Work\n" +
        "Automotive\n" +
        "Diet\n");
}