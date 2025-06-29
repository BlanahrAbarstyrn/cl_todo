// src/storage.ts

import fs from "fs";
import { User } from "./types";

const DATA_FILE = "users.json";

export function loadUsers(): User[] {
    // read file, parse JSON, return array of User objects 
}

export function saveUsers(users: User[]): void {
    // stringify to JSON, write to file
}

export function deleteUser(username: string): void {
    // Load all users,
    // remove the one whose username matches,
    // save the array back to users.json
}


/*
// check if data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]");
}
*/