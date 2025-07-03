// src/data.ts

import fs from "fs";
import { rl } from "./io";
import * as Types from "./types";
import * as Menus from "./menus";
import { currentUser, setCurrentUser } from "./state";


export let Users: Types.User[] = [];

export function createUser() {
    rl.question("Enter new user name or enter c to cancel: ", (answer) => {
        if (answer.toLowerCase() === "c") {
            Menus.cancel();
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
        console.log("\nAll users:", Users.map(u => u.username).join(", "));
        Menus.printMainMenu();
        Menus.promptMenu();
    });
}


export function chooseUserMenu() {
    if (Users.length === 0) {
        console.log("\nNo users found. Please create a user first.");
        Menus.cancel();
        return;
    }
    console.log("\nChoose a user:");
    Users.forEach((user, idx) => {
        console.log(`${idx + 1}. ${user.username}`);
    });
    rl.question("\nEnter the number of the user to select, or c to cancel: ", (answer) => {
        if (answer.toLowerCase() === "c") {
            Menus.cancel();
            return;
    }
    const index = parseInt(answer) - 1;
    if (isNaN(index) || index < 0 || index >= Users.length) {
        console.log("\nInvalid selection. Please try again.");
        chooseUserMenu();
        return;
    } else {
        setCurrentUser(Users[index]);
        console.log(`\nYou selected: ${currentUser!.username}`);
        // boot up user specific project menus from here, but for now...
        Menus.printProjectMenu();
        Menus.promptProjectMenu();
        return;
        }
    });
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
export function loadUsersFromFile() {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    try {
        const loadedUsers = JSON.parse(data);
        Users.push(...loadedUsers);
        console.log(`\nLoaded ${loadedUsers.length} user(s) from file.`);
    } catch (err) {
        console.error("\nError parsing users.json:", err);
    }
  } else {
    console.log("\nNo existing data file found. Starting fresh.");
  }
}


export function saveUsers(users: Types.User[]): void {
    // stringify to JSON, write to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}


export function deleteUser(username: string): void {
    // Load all users,
    // remove the one whose username matches,
    // save the array back to users.json
}