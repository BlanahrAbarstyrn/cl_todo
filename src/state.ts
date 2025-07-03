// src/state.ts

import { User } from "./types";

export let currentUser: User | null = null;

// Optional: helper to set or clear the current user
export function setCurrentUser(user: User | null) {
  currentUser = user;
}