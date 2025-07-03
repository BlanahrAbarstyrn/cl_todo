// src/storage.ts

import readline from "readline";
import fs from "fs";
import { User } from "./types";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const DATA_FILE = "users.json";


export function loadUsers(): User[] {
    // read file, parse JSON, return array of User objects
    if (fs.existsSync("users.json")) {
        Users = JSON.parse(fs.readFileSync("users.json", "utf8"));
    } 
}

export function saveUsers(users: User[]): void {
    // stringify to JSON, write to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

export function deleteUser(username: string): void {
    // Load all users,
    // remove the one whose username matches,
    // save the array back to users.json
}


export function createUser(username: string): void {
    rl.question("Enter new user name ", (answer) => {
        console.log(`\nWelcome, ${answer}!`);
    });
    
    // prompt user to type a user name
    // compare input to existing users
    // reprompt for another name if name exists
    // else push name to users array
    // immediately call create project
}


/*
// check if data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]");
}
*/

