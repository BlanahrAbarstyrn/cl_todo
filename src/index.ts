// src/index.ts

import * as Menus from "./menus";
import * as Data from "./data";


// ====> MAIN PROGRAM LOOP <====

console.clear();
Data.loadUsersFromFile();
Menus.printMainMenu();
Menus.promptMenu();