// src/types.ts

export interface Tag {
    name: string;
}

export interface Task {
    taskDescription: string;
    taskPriority: "today" | "this week" | "this month" | "whenever" | "ASAP!!!";
    isComplete: boolean;
    subTasks: Task[];
    tags: Tag[];
}

export interface Project {
    projectName: string;
    projectDescription?: string;
    tasks: Task[];
    tags: Tag[];
}

export interface User {
    username: string;
    projects: Project[];
}